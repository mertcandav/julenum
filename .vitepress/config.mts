import { defineConfig } from 'vitepress'
import { ILanguageRegistration, getHighlighter } from 'shiki';
import { IGrammar } from 'vscode-textmate';
import { readFileSync } from 'fs';

class Jule implements ILanguageRegistration {
  id: string;
  name: string;
  scopeName: string;
  displayName?: string | undefined;
  path: string;
  grammar?: IGrammar | undefined;
  aliases?: string[] | undefined;

  constructor() {
    this.id = "jule";
    this.name = "jule";
    this.scopeName = "source.jule";
    this.displayName = "jule";
    this.path = "";
    this.grammar = JSON.parse(readFileSync("jule/jule.tmLanguage.json").toString());
  }
}

const jule = new Jule();
const highlighter = await getHighlighter({
  theme: JSON.parse(readFileSync("jule/draculaTheme.json").toString()),
});
await highlighter.loadLanguage(jule);

export default defineConfig({
  srcDir: 'src',
  title: 'Jule Manual',
  description: 'Documentations of the Jule Programming Language.',

  markdown: {
    lineNumbers: true,
    languages: [jule],
    highlight(str, lang, attrs) {
      return highlighter.codeToHtml(str.trim(), { lang: lang });
    },
    theme: "dracula-soft",
  },

  head: [],
  themeConfig: {
    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Manual', link: '/' },
    ],

    sidebar: {
      '/': [
        { text: 'julenum', link: '/' },
        {
          text: "API",
          link: '/api/',
          items: [
            {
              text: "dsp",
              link: '/api/dsp/',
              items: [
                { text: 'dsp/fourier', link: '/api/dsp/fourier' },
              ]
            },
            { text: 'interp', link: '/api/interp' },
            { text: 'mat', link: '/api/mat' },
            {
              text: "julenum/num",
              link: '/api/num/',
              items: [
                { text: 'dual', link: '/api/num/dual' },
                { text: 'dualquat', link: '/api/num/dualquat' },
                { text: 'quat', link: '/api/num/quat' },
              ]
            },
            { text: 'poly', link: '/api/poly' },
            { text: 'seq', link: '/api/seq' },
            {
              text: 'stat',
              link: '/api/stat/',
              items: [
                { text: 'dist', link: '/api/stat/dist' },
              ],
            },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/mertcandav/julenum' }
    ]
  }
})
