# julenum

A high-performance library for numerical methods and scientific computing, written in [Jule](https://github.com/julelang/jule).

It provides core components for scientific computing, numerical analysis, statistics, algebra, and more.
Designed to be consistent, efficient, and high-performance, with a focus on precision.

### Key Features

- Linear Algebra: Matrix and vector arithmetic
- Polynomials: Addition, multiplication, division, GCD, interpolation, normalization, etc.
- Statistics: Descriptive statistics, common probability distributions
- Special Functions: Gamma, Beta, Erf, Airy, and other advanced mathematical functions
- Number Sequences: Fibonacci, Catalan, and other integer sequences
- Transforms: Fast Fourier Transform (FFT), trigonometric and unit conversions
- Numerical Utilities: Floating-point tolerance comparisons, primality testing, and etc.
- Mathematical Constants: Pi, Euler’s constant, Avogadro number, proton mass, and more
- Number Types: Quaternion, dual numbers, and more for advanced algebraic computations
- Interpolation: Polynomial and Lagrange interpolation methods for data fitting

## Design Principles

The purpose of the julenum project is to provide a high-performance numerical and scientific computing library for the Jule programming language.
Performance and efficiency are prioritized over user experience in most cases. However, it is still important to provide an API that is as easy to use as possible.
Where applicable, algorithm sources and mathematical references are clearly cited within the code comments.
Calls to external languages or assembly are avoided to maintain portability, simplicity and conssitency. Every implementation must be made in Pure Jule.
Designed to maximize raw CPU performance without depending on GPU acceleration or SIMD techniques.

## Contributing

Any contribution to julenum is greatly appreciated, whether it's a typo fix, a brand new feature, or a bug report.
The julenum project uses GitHub issues for things like proposals, bug reports, and security vulnerabilities.

Please read the [Julenour Code of Conduct](https://jule.dev/code-of-conduct) and the [contribution guidelines](./CONTRIBUTING.md) before contributing.

## License

julenum is distributed under the terms of the BSD 3-Clause license. <br>
[See License Details](./LICENSE)
