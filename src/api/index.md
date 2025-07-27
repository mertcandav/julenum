# API

The main package of the julenum.\
Provides common numerical functions.

## Index

[Variables](#variables)\
[fn AiryAi\(z: cmplx128\): cmplx128](#airyai)\
[fn AiryAiDeriv\(z: cmplx128\): cmplx128](#airyaideriv)\
[fn CompleteK\(m: f64\): f64](#completek)\
[fn CompleteE\(m: f64\): f64](#completee)\
[fn CompleteB\(m: f64\): f64](#completeb)\
[fn CompleteD\(m: f64\): f64](#completed)\
[fn EllipticRF\(x: f64, y: f64, z: f64\): f64](#ellipticrf)\
[fn EllipticRD\(x: f64, y: f64, z: f64\): f64](#ellipticrd)\
[fn EllipticF\(phi: f64, m: f64\): f64](#ellipticf)\
[fn EllipticE\(phi: f64, m: f64\): f64](#elliptice)\
[fn NaN\(payload: u64\): f64](#nan)\
[fn NaNPayload\(f: f64\): \(payload: u64, ok: bool\)](#nanpayload)\
[fn MvLgamma\(v: f64, dim: int\): f64](#mvlgamma)\
[fn Prime\(x: u64\): bool](#prime)\
[fn Beta\(a: f64, b: f64\): f64](#beta)\
[fn Lbeta\(a: f64, b: f64\): f64](#lbeta)\
[fn Equal\(a: f64, b: f64\): bool](#equal)\
[fn Same\(a: f64, b: f64\): bool](#same)\
[fn Clamp\(x: f64, min: f64, max: f64\): f64](#clamp)\
[fn Zeta\(x: f64, q: f64\): f64](#zeta)\
[fn Tolerance\(a: f64, b: f64, mut e: f64\): bool](#tolerance)\
[fn Close\(a: f64, b: f64\): bool](#close)\
[fn VeryClose\(a: f64, b: f64\): bool](#veryclose)\
[fn Alike\(a: f64, b: f64\): bool](#alike)\
[fn CmplxTolerance\(a: cmplx128, b: cmplx128, mut e: f64\): bool](#cmplxtolerance)\
[fn CmplxClose\(a: cmplx128, b: cmplx128\): bool](#cmplxclose)\
[fn CmplxVeryClose\(a: cmplx128, b: cmplx128\): bool](#cmplxveryclose)\
[fn CmplxAlike\(a: cmplx128, b: cmplx128\): bool](#cmplxalike)\
[fn NormalQuantile\(p: f64\): f64](#normalquantile)\
[fn RadiansToDegrees\(rad: f64\): f64](#radianstodegrees)\
[fn DegreesToRadians\(deg: f64\): f64](#degreestoradians)\
[fn DegreesToGradians\(deg: f64\): f64](#degreestogradians)\
[fn GradiansToDegrees\(grad: f64\): f64](#gradianstodegrees)\
[fn RadiansToGradians\(rad: f64\): f64](#radianstogradians)\
[fn GradiansToRadians\(grad: f64\): f64](#gradianstoradians)\
[fn HMSToDegrees\(hours: f64, minutes: f64, seconds: f64\): f64](#hmstodegrees)\
[fn DegreesToHMS\(deg: f64\): \(hours: f64, minutes: f64, seconds: f64\)](#degreestohms)\
[fn DMSToDegrees\(degrees: f64, minutes: f64, seconds: f64\): f64](#dmstodegrees)\
[fn DegreesToDMS\(deg: f64\): \(degrees: f64, minutes: f64, seconds: f64\)](#degreestodms)\
[fn NormalizeAngle\(deg: f64\): f64](#normalizeangle)\
[fn NormalizeRAHours\(hours: f64\): f64](#normalizerahours)\
[fn CartesianToSpherical\(x: f64, y: f64, z: f64\): \(r: f64, theta: f64, phi: f64\)](#cartesiantospherical)\
[fn SphericalToCartesian\(r: f64, theta: f64, phi: f64\): \(x: f64, y: f64, z: f64\)](#sphericaltocartesian)\
[fn GammaIncReg\(a: f64, x: f64\): f64](#gammaincreg)\
[fn GammaIncRegComp\(a: f64, x: f64\): f64](#gammaincregcomp)\
[fn GammaIncRegInv\(a: f64, y: f64\): f64](#gammaincreginv)\
[fn GammaIncRegCompInv\(a: f64, y: f64\): f64](#gammaincregcompinv)\
[fn Max\[T: integer \| float\]\(s: \.\.\.T\): T](#max)\
[fn Min\[T: integer \| float\]\(s: \.\.\.T\): T](#min)\
[fn MinMax\[T: integer \| float\]\(s: \.\.\.T\): \(min: T, max: T\)](#minmax)\
[fn Sum\[T: numeric\]\(s: \.\.\.T\): T](#sum)\
[fn Linspace\[T: integer \| float\]\(start: T, stop: T, n: int\): \[\]T](#linspace)\
[fn Logspace\[T: integer \| float\]\(start: T, stop: T, n: int, base: f64\): \[\]T](#logspace)\
[fn Geomspace\[T: integer \| float\]\(mut start: T, mut stop: T, n: int\): \[\]T](#geomspace)\
[fn Range\[T: integer \| float\]\(mut start: T, stop: T, step: T\): \[\]T](#range)\
[fn Digamma\(mut x: f64\): \(result: f64\)](#digamma)\
[fn Round\(mut x: f64, prec: int\): f64](#round)\
[fn RoundEven\(mut x: f64, prec: int\): f64](#roundeven)\
[fn RegIncBeta\(a: f64, b: f64, x: f64\): f64](#regincbeta)\
[fn InvRegIncBeta\(a: f64, b: f64, y: f64\): f64](#invregincbeta)

## Variables

```jule
const (
	E   = 2.71828182845904523536028747135266249775724709369995957496696763 // https://oeis.org/A001113
	Pi  = 3.14159265358979323846264338327950288419716939937510582097494459 // https://oeis.org/A000796
	Pi2 = 9.86960440108935861883449099987615113531369940724079062641334937 // https://oeis.org/A002388
	Pi3 = 31.0062766802998201754763150671013952022252885658851076941445381 // https://oeis.org/A091925
	Pi4 = 97.4090910340024372364403326887051112497275856726854216914678593 // https://oeis.org/A092425
	Pi6 = 961.389193575304437030219443652419898867217528081046615941076187 // https://oeis.org/A092732
	Phi = 1.61803398874989484820458683436563811772030917980576286213544862 // https://oeis.org/A001622

	Sqrt2   = 1.41421356237309504880168872420969807856967187537694807317667974 // https://oeis.org/A002193
	SqrtE   = 1.64872127070012814684865078781416357165377610071014801157507931 // https://oeis.org/A019774
	SqrtPi  = 1.77245385090551602729816748334114518279754945612238712821380779 // https://oeis.org/A002161
	SqrtPhi = 1.27201964951406896425242246173749149171560804184009624861664038 // https://oeis.org/A139339

	Ln2    = 0.693147180559945309417232121458176568075500134360255254120680009 // https://oeis.org/A002162
	Log2E  = 1 / Ln2
	Ln10   = 2.30258509299404568401799145468436420760110148862877297603332790 // https://oeis.org/A002392
	Log10E = 1 / Ln10

	Euler                   = 0.577215664901532860606512090082402431042159335939923598805767234 // https://oeis.org/A001620
	Gauss                   = 2.62205755429211981046483958989111941368275495143162316281682170  // https://oeis.org/A062539
	Gelfond                 = 23.1406926327792690057290863679485473802661062426002119934450464  // https://oeis.org/A039661
	Apery                   = 1.20205690315959428539973816151144999076498629234049888179227155  // https://oeis.org/A002117
	Khinchin                = 2.68545200106530644530971483548179569382038229399446295305115234  // https://oeis.org/A002210
	Catalan                 = 0.915965594177219015054603514932384110774149374281672134266498119 // https://oeis.org/A006752
	Faraday                 = 96485.33212                                                       // https://physics.nist.gov/cgi-bin/cuu/Value?f, https://oeis.org/A163999
	Avogadro                = 6.02214076 * 1e+23                                                // https://physics.nist.gov/cgi-bin/cuu/Value?na, https://oeis.org/A322578
	Chaitin                 = 0.0078749969978123844                                             // https://oeis.org/A100264
	Planck                  = 6.62607015 * 1e-34                                                // https://physics.nist.gov/cgi-bin/cuu/Value?h, https://oeis.org/A003676
	ReducedPlanck           = 1.054571817 * 1e-34                                               // https://physics.nist.gov/cgi-bin/cuu/Value?mpsme, https://oeis.org/A254181
	Rydberg                 = 10973731.568157                                                   // https://physics.nist.gov/cgi-bin/cuu/Value?ryd, https://oeis.org/A081821
	Boltzmann               = 1.380649 * 1e-23                                                  // https://physics.nist.gov/cgi-bin/cuu/Value?k, https://oeis.org/A070063
	StefanBoltzmann         = 5.670374419 * 1e-8                                                // https://physics.nist.gov/cgi-bin/cuu/Value?sigma, https://oeis.org/A081820
	Conway                  = 1.30357726903429639125709911215255189073070250465940487575486139  // https://oeis.org/A014715
	Lehmer                  = 1.17628081825991750654407033847403505069341580656469525983010634  // https://oeis.org/A073011
	Ramanujan               = 262537412640768743.999999999999250072597198185688879353856337336  // https://oeis.org/A060295
	VonKlitzing             = 25812.80745                                                       // https://physics.nist.gov/cgi-bin/cuu/Value?rk, https://oeis.org/A248510
	ConventionalVonKlitzing = 25812.807                                                         // https://physics.nist.gov/cgi-bin/cuu/Value?rk90, https://oeis.org/A362590
	Josephson               = 483597.8484 * 1e+9                                                // https://physics.nist.gov/cgi-bin/cuu/Value?kjos, https://oeis.org/A248508

	GelfondSchneider     = 2.66514414269022518865029724987313984827421131371465949283597959 // https://oeis.org/A007507
	SqrtGelfondSchneider = 1.63252691943815284477349538102471960207910885705311411724778068 // https://oeis.org/A078333

	FirstFeigenbaum  = 4.66920160910299067185320382046620161725818557747576863274565134 // https://oeis.org/A006890
	SecondFeigenbaum = 2.50290787509589282228390287321821578638127137672714997733619205 // https://oeis.org/A006891

	InvSqrtPi2              = 0.398942280401432677939946059934381868475858631164934657665925829 // https://oeis.org/A231863
	Erf1                    = 0.842700792949714869341220635082609259296066997966302908459937897 // https://oeis.org/A099286
	GaussianGravity         = 1.720209895 * 1e-2                                                // https://oeis.org/A248363
	NewtonianGravity        = 6.67430 * 1e-11                                                   // https://physics.nist.gov/cgi-bin/cuu/Value?bg, https://oeis.org/A070058
	AtomicMass              = 1.66053906892 * 1e-27                                             // https://physics.nist.gov/cgi-bin/cuu/Value?u, https://oeis.org/A081825
	ElectronMass            = 9.1093837139 * 1e-31                                              // https://physics.nist.gov/cgi-bin/cuu/Value?me, https://oeis.org/A081801
	ProtonMass              = 1.67262192595 * 1e-27                                             // https://physics.nist.gov/cgi-bin/cuu/Value?mp, https://oeis.org/A070059
	ProtonElectronMassRatio = 1836.152673426                                                    // https://physics.nist.gov/cgi-bin/cuu/Value?mpsme, https://oeis.org/A005601
	BohrRadius              = 5.29177210544 * 1e-11                                             // https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0, https://oeis.org/A003671
	PlanckLength            = 1.616255 * 1e-35                                                  // https://physics.nist.gov/cgi-bin/cuu/Value?plkl, https://oeis.org/A078300
	PlanckTemperature       = 1.416784 * 1e+32                                                  // https://physics.nist.gov/cgi-bin/cuu/Value?plktmp, https://oeis.org/A210491
	PlanckTime              = 5.391247 * 1e-44                                                  // https://physics.nist.gov/cgi-bin/cuu/Value?plkt, https://oeis.org/A078302
	PlanckMass              = 2.176434 * 1e-8                                                   // https://physics.nist.gov/cgi-bin/cuu/Value?plkm, https://oeis.org/A078301
	BaselProblem            = 1.64493406684822643647241516664602518921894990120679843773555822  // https://oeis.org/A013661
	FineStructure           = 7.2973525643 * 1e-3                                               // https://physics.nist.gov/cgi-bin/cuu/Value?alph, https://oeis.org/A003673
	InvFineStructure        = 137.035999177                                                     // https://physics.nist.gov/cgi-bin/cuu/Value?alphinv, https://oeis.org/A005600
	Gas                     = 8.314462618                                                       // https://physics.nist.gov/cgi-bin/cuu/Value?r, https://oeis.org/A070064
	Magnetic                = 1.25663706127 * 1e-6                                              // https://physics.nist.gov/cgi-bin/cuu/Value?mu0
	Electric                = 8.8541878188 * 1e-12                                              // https://physics.nist.gov/cgi-bin/cuu/Value?ep0, https://oeis.org/A081799
	SpeedOfLight            = 299792458                                                         // https://physics.nist.gov/cgi-bin/cuu/Value?c, https://oeis.org/A003678
	ElementaryCharge        = 1.602176634 * 1e-19                                               // https://physics.nist.gov/cgi-bin/cuu/Value?e, https://oeis.org/A081823
	ElectronVolt            = 1.602176634 * 1e-19                                               // https://physics.nist.gov/cgi-bin/cuu/Value?evj
	MolarMass               = 1.00000000105 * 1e-3                                              // https://physics.nist.gov/cgi-bin/cuu/Value?mu
	ConductanceQuantum      = 7.748091729 * 1e-5                                                // https://physics.nist.gov/cgi-bin/cuu/Value?conqu2e2sh, https://oeis.org/A081824
	ThomsonCrossSection     = 6.6524587051 * 1e-29                                              // https://physics.nist.gov/cgi-bin/cuu/Value?sigmae, https://oeis.org/A255823
	HartreeEnergy           = 4.3597447222060 * 1e-18                                           // https://physics.nist.gov/cgi-bin/cuu/Value?hr, https://oeis.org/A229938
	BohrMagneton            = 9.2740100657 * 1e-24                                              // https://physics.nist.gov/cgi-bin/cuu/Value?mub, https://oeis.org/A234371
	NuclearMagneton         = 5.0507837393 * 1e-27                                              // https://physics.nist.gov/cgi-bin/cuu/Value?mun
	MagneticFluxQuantum     = 2.067833848 * 1e-15                                               // https://physics.nist.gov/cgi-bin/cuu/Value?flxquhs2e, https://oeis.org/A248507
)
```
Mathematical constants\.

---

```jule
let P0: [5]f64 = [ ... ]
```
approximation for 0 &lt;= \|y \- 0\.5\| &lt;= 3/8

---

```jule
let Q0: [8]f64 = [ ... ]
```


---

```jule
let P1: [9]f64 = [ ... ]
```
Approximation for interval z = math\.Sqrt\(\-2 log y \) between 2 and 8 i\.e\., y between exp\(\-2\) = \.135 and exp\(\-32\) = 1\.27e\-14\.

---

```jule
let Q1: [8]f64 = [ ... ]
```


---

```jule
let P2: [9]f64 = [ ... ]
```
Approximation for interval z = math\.Sqrt\(\-2 log y \) between 8 and 64 i\.e\., y between exp\(\-32\) = 1\.27e\-14 and exp\(\-2048\) = 3\.67e\-890\.

---

```jule
let Q2: [8]f64 = [ ... ]
```


## AiryAi
```jule
fn AiryAi(z: cmplx128): cmplx128
```
Returns the value of the Airy function at z\. The Airy function here, Ai\(z\), is one of the two linearly independent solutions to

```
y′′ - y*z = 0.
```
See http://mathworld\.wolfram\.com/AiryFunctions\.html for more detailed information\.

## AiryAiDeriv
```jule
fn AiryAiDeriv(z: cmplx128): cmplx128
```
Returns the value of the derivative of the Airy function at z\. The Airy function here, Ai\(z\), is one of the two linearly independent solutions to

```
y′′ - y*z = 0.
```
See http://mathworld\.wolfram\.com/AiryFunctions\.html for more detailed information\.

## CompleteK
```jule
fn CompleteK(m: f64): f64
```
Computes the complete elliptic integral of the 1st kind, 0≤m≤1\. It returns math\.NaN\(\) if m is not in \[0,1\]\.<br>
```
K(m) = \int_{0}^{π/2} 1/{\sqrt{1-m{\sin^2θ}}} dθ
```


## CompleteE
```jule
fn CompleteE(m: f64): f64
```
Computes the complete elliptic integral of the 2nd kind, 0≤m≤1\. It returns math\.NaN\(\) if m is not in \[0,1\]\.<br>
```
E(m) = \int_{0}^{π/2} {\sqrt{1-m{\sin^2θ}}} dθ
```


## CompleteB
```jule
fn CompleteB(m: f64): f64
```
Computes an associate complete elliptic integral of the 2nd kind, 0≤m≤1\. It returns math\.NaN\(\) if m is not in \[0,1\]\.<br>
```
B(m) = \int_{0}^{π/2} {\cos^2θ} / {\sqrt{1-m{\sin^2θ}}} dθ
```


## CompleteD
```jule
fn CompleteD(m: f64): f64
```
Computes an associate complete elliptic integral of the 2nd kind, 0≤m≤1\. It returns math\.NaN\(\) if m is not in \[0,1\]\.<br>
```
D(m) = \int_{0}^{π/2} {\sin^2θ} / {\sqrt{1-m{\sin^2θ}}} dθ
```


## EllipticRF
```jule
fn EllipticRF(x: f64, y: f64, z: f64): f64
```
Computes the symmetric elliptic integral R\_F\(x,y,z\):<br>
```
R_F(x,y,z) = (1/2)\int_{0}^{\infty}{1/s(t)} dt,
s(t) = \sqrt{(t+x)(t+y)(t+z)}.
```
The arguments x, y, z must satisfy the following conditions, otherwise the function returns math\.NaN\(\):<br>
```
0 ≤ x,y,z ≤ upper,
lower ≤ x+y,y+z,z+x,
```
where:<br>
```
lower = 5/(2^1022) = 1.112536929253601e-307,
upper = (2^1022)/5 = 8.988465674311580e+306.
```
The definition of the symmetric elliptic integral R\_F can be found in NIST Digital Library of Mathematical Functions \(http://dlmf\.nist\.gov/19\.16\.E1\)\.

## EllipticRD
```jule
fn EllipticRD(x: f64, y: f64, z: f64): f64
```
Computes the symmetric elliptic integral R\_D\(x,y,z\):

```
R_D(x,y,z) = (1/2)\int_{0}^{\infty}{1/(s(t)(t+z))} dt,
s(t) = \sqrt{(t+x)(t+y)(t+z)}.
```
The arguments x, y, z must satisfy the following conditions, otherwise the function returns math\.NaN\(\):<br>
```
0 ≤ x,y ≤ upper,
lower ≤ z ≤ upper,
lower ≤ x+y,
```
where:<br>
```
lower = (5/(2^1022))^(1/3) = 4.809554074311679e-103,
upper = ((2^1022)/5)^(1/3) = 2.079194837087086e+102.
```
The definition of the symmetric elliptic integral R\_D can be found in NIST Digital Library of Mathematical Functions \(http://dlmf\.nist\.gov/19\.16\.E5\)\.

## EllipticF
```jule
fn EllipticF(phi: f64, m: f64): f64
```
Computes the Legendre&#39;s elliptic integral of the 1st kind F\(phi,m\), 0≤m&lt;1:<br>
```
F(\phi,m) = \int_{0}^{\phi} 1 / \sqrt{1-m\sin^2(\theta)} d\theta
```
Legendre&#39;s elliptic integrals can be expressed as symmetric elliptic integrals, in this case:<br>
```
F(\phi,m) = \sin\phi R_F(\cos^2\phi,1-m\sin^2\phi,1)
```
The definition of F\(phi,k\) where k=sqrt\(m\) can be found in NIST Digital Library of Mathematical Functions \(http://dlmf\.nist\.gov/19\.2\.E4\)\.

## EllipticE
```jule
fn EllipticE(phi: f64, m: f64): f64
```
Computes the Legendre&#39;s elliptic integral of the 2nd kind E\(phi,m\), 0≤m&lt;1:<br>
```
E(\phi,m) = \int_{0}^{\phi} \sqrt{1-m\sin^2(\theta)} d\theta
```
Legendre&#39;s elliptic integrals can be expressed as symmetric elliptic integrals, in this case:<br>
```
E(\phi,m) = \sin\phi R_F(\cos^2\phi,1-m\sin^2\phi,1)-(m/3)\sin^3\phi R_D(\cos^2\phi,1-m\sin^2\phi,1)
```
The definition of E\(phi,k\) where k=sqrt\(m\) can be found in NIST Digital Library of Mathematical Functions \(http://dlmf\.nist\.gov/19\.2\.E5\)\.

## NaN
```jule
fn NaN(payload: u64): f64
```
Returns an IEEE 754 &#34;quiet not\-a\-number&#34; value with the payload specified in the low 51 bits of payload\. The NaN returned by math::NaN has a bit pattern equal to NaN\(1\)\.

## NaNPayload
```jule
fn NaNPayload(f: f64): (payload: u64, ok: bool)
```
Returns the lowest 51 bits payload of an IEEE 754 &#34;quiet not\-a\-number&#34;\. Returns zero and false, if f is not a &#34;quiet not\-a\-number&#34;\.

## MvLgamma
```jule
fn MvLgamma(v: f64, dim: int): f64
```
Returns the log of the multivariate Gamma function\. Dim must be greater than zero, and MvLgamma will return NaN if v &lt; \(dim\-1\)/2\.

See https://en\.wikipedia\.org/wiki/Multivariate\_gamma\_function for more information\.

## Prime
```jule
fn Prime(x: u64): bool
```
Reports whether x is prime\. It is 100% accurate for all inputs\.

## Beta
```jule
fn Beta(a: f64, b: f64): f64
```
Returns the value of the complete beta function B\(a, b\)\. It is defined as

```
Γ(a)Γ(b) / Γ(a+b)
```
Special cases are:<br>
```
B(a,b) = NaN, if a or b is Inf
B(a,b) = NaN, if a and b are 0
B(a,b) = NaN, if a or b is NaN
B(a,b) = NaN, if a or b is < 0
B(a,b) = +Inf, if a xor b is 0.
```
See http://mathworld\.wolfram\.com/BetaFunction\.html for more detailed information\.

## Lbeta
```jule
fn Lbeta(a: f64, b: f64): f64
```
Returns the natural logarithm of the complete beta function B\(a,b\)\. Lbeta is defined as:

```
Ln(Γ(a)Γ(b)/Γ(a+b))
```
Special cases are:<br>
```
Lbeta(a,b) = NaN, if a or b is Inf
Lbeta(a,b) = NaN, if a and b are 0
Lbeta(a,b) = NaN, if a or b is NaN
Lbeta(a,b) = NaN, if a or b is < 0
Lbeta(a,b) = +Inf, if a xor b is 0.
```


## Equal
```jule
fn Equal(a: f64, b: f64): bool
```
Reports whether two values a and b are considered equal, allowing NaNs\.

## Same
```jule
fn Same(a: f64, b: f64): bool
```
Reports whether two values a and b are considered same\. It returns true if both are NaN \(Not a Number\), or if they are exactly equal including matching their sign bits \(distinguishing \+0 and \-0\)\. If both are NaN, if guarantees payload equality for the quiet\-NaNs\.

## Clamp
```jule
fn Clamp(x: f64, min: f64, max: f64): f64
```
Clamps x to the range \[min, max\]\.

## Zeta
```jule
fn Zeta(x: f64, q: f64): f64
```
Computes the Riemann zeta function of two arguments\.<br>
```
Zeta(x,q) = \sum_{k=0}^{\infty} (k+q)^{-x}
```
Note that it returns \+Inf if x is 1 and will panic if x is less than 1, q is either zero or a negative integer, or q is negative and x is not an integer\.

See http://mathworld\.wolfram\.com/HurwitzZetaFunction\.html or https://en\.wikipedia\.org/wiki/Multiple\_zeta\_function\#Two\_parameters\_case for more detailed information\.

## Tolerance
```jule
fn Tolerance(a: f64, b: f64, mut e: f64): bool
```
Reports whether two values a and b are approximately equal, within a relative tolerance e\. This is useful for comparing floating\-point values where exact equality is unreliable due to rounding errors\.

It returns true if the absolute difference between a and b is less than the tolerance threshold scaled by the expected value b, or if a and b are exactly equal\.

## Close
```jule
fn Close(a: f64, b: f64): bool
```
Reports whether two values a and b are approximately equal within a very tight default relative tolerance of 1e\-14\.

## VeryClose
```jule
fn VeryClose(a: f64, b: f64): bool
```
Reports whether two values a and b are approximately equal within an extremely tight default relative tolerance of 4e\-16\.

## Alike
```jule
fn Alike(a: f64, b: f64): bool
```
Reports whether two values a and b are considered alike\. It returns true if both are NaN \(Not a Number\), or if they are exactly equal including matching their sign bits \(distinguishing \+0 and \-0\)\.

## CmplxTolerance
```jule
fn CmplxTolerance(a: cmplx128, b: cmplx128, mut e: f64): bool
```
Reports whether two values a and b are approximately equal, within a relative tolerance e\. This is useful for comparing floating\-point values where exact equality is unreliable due to rounding errors\.

It returns true if the absolute difference between a and b is less than the tolerance threshold scaled by the expected value b, or if a and b are exactly equal\.

## CmplxClose
```jule
fn CmplxClose(a: cmplx128, b: cmplx128): bool
```
Reports whether two values a and b are approximately equal within a very tight default relative tolerance of 1e\-14\.

## CmplxVeryClose
```jule
fn CmplxVeryClose(a: cmplx128, b: cmplx128): bool
```
Reports whether two values a and b are approximately equal within an extremely tight default relative tolerance of 4e\-16\.

## CmplxAlike
```jule
fn CmplxAlike(a: cmplx128, b: cmplx128): bool
```
Reports whether two values a and b are considered alike\. It returns true if both are NaN \(Not a Number\), or if they are exactly equal including matching their sign bits \(distinguishing \+0 and \-0\)\.

## NormalQuantile
```jule
fn NormalQuantile(p: f64): f64
```
Computes the quantile function \(inverse CDF\) of the standard normal\. It panics if the input p is less than 0 or greater than 1\.

## RadiansToDegrees
```jule
fn RadiansToDegrees(rad: f64): f64
```
Converts radians to degrees\.

## DegreesToRadians
```jule
fn DegreesToRadians(deg: f64): f64
```
Converts degrees to radians\.

## DegreesToGradians
```jule
fn DegreesToGradians(deg: f64): f64
```
Converts degrees to gradians\.

## GradiansToDegrees
```jule
fn GradiansToDegrees(grad: f64): f64
```
Converts gradians to degrees\.

## RadiansToGradians
```jule
fn RadiansToGradians(rad: f64): f64
```
Converts radians to gradians\.

## GradiansToRadians
```jule
fn GradiansToRadians(grad: f64): f64
```
Converts gradians to radians\.

## HMSToDegrees
```jule
fn HMSToDegrees(hours: f64, minutes: f64, seconds: f64): f64
```
Converts an angle given in hours, minutes, and seconds to degrees \(used in RA conversion\)\.

## DegreesToHMS
```jule
fn DegreesToHMS(deg: f64): (hours: f64, minutes: f64, seconds: f64)
```
Converts decimal degrees to hours, minutes, and seconds \(used in RA\)\.

## DMSToDegrees
```jule
fn DMSToDegrees(degrees: f64, minutes: f64, seconds: f64): f64
```
Converts an angle in degrees, arcminutes, and arcseconds to decimal degrees\. Supports negative input for southern or western directions\.

## DegreesToDMS
```jule
fn DegreesToDMS(deg: f64): (degrees: f64, minutes: f64, seconds: f64)
```
Converts decimal degrees to degrees, minutes, and seconds\.

## NormalizeAngle
```jule
fn NormalizeAngle(deg: f64): f64
```
Normalizes an angle in degrees to the range \[0, 360\)\.

## NormalizeRAHours
```jule
fn NormalizeRAHours(hours: f64): f64
```
Normalizes RA hours to the range \[0, 24\)\.

## CartesianToSpherical
```jule
fn CartesianToSpherical(x: f64, y: f64, z: f64): (r: f64, theta: f64, phi: f64)
```
Converts Cartesian coordinates \(x, y, z\) to spherical coordinates \(r, theta, phi\)\.

```
r: radius (distance from origin)
theta: polar angle (0 ≤ theta ≤ π), angle from +z axis
phi: azimuthal angle (0 ≤ phi < 2π), angle from +x axis in xy-plane
```


## SphericalToCartesian
```jule
fn SphericalToCartesian(r: f64, theta: f64, phi: f64): (x: f64, y: f64, z: f64)
```
Converts spherical coordinates \(r, theta, phi\) in radians to Cartesian coordinates \(x, y, z\)\.

theta: polar angle in radians \(0 ≤ θ ≤ π\) phi: azimuthal angle in radians \(0 ≤ φ &lt; 2π\)

## GammaIncReg
```jule
fn GammaIncReg(a: f64, x: f64): f64
```
Computes the regularized incomplete Gamma integral\.

```
GammaIncReg(a,x) = (1/ Γ(a)) \int_0^x e^{-t} t^{a-1} dt
```
The input argument a must be positive and x must be non\-negative or it will panic\.

See http://mathworld\.wolfram\.com/IncompleteGammaFunction\.html or https://en\.wikipedia\.org/wiki/Incomplete\_gamma\_function for more detailed information\.

## GammaIncRegComp
```jule
fn GammaIncRegComp(a: f64, x: f64): f64
```
Computes the complemented regularized incomplete Gamma integral\.

```
GammaIncRegComp(a,x) = 1 - GammaIncReg(a,x)
                     = (1/ Γ(a)) \int_x^\infty e^{-t} t^{a-1} dt
```
The input argument a must be positive and x must be non\-negative or it will panic\.

## GammaIncRegInv
```jule
fn GammaIncRegInv(a: f64, y: f64): f64
```
Computes the inverse of the regularized incomplete Gamma integral\. That is, it returns the x such that:

```
GammaIncReg(a, x) = y
```
The input argument a must be positive and y must be between 0 and 1 inclusive or it will panic\. It should return a positive number, but can return NaN if there is a failure to converge\.

## GammaIncRegCompInv
```jule
fn GammaIncRegCompInv(a: f64, y: f64): f64
```
Computes the inverse of the complemented regularized incomplete Gamma integral\. That is, it returns the x such that:

```
GammaIncRegComp(a, x) = y
```
The input argument a must be positive and y must be between 0 and 1 inclusive or it will panic\. It should return a positive number, but can return 0 even with non\-zero y due to underflow\.

## Max
```jule
#disable boundary
fn Max[T: integer | float](s: ...T): T
```
Returns the maximum value of the slice\. If len\(s\) == 0, it panics\.

Special cases are:<br>
```
Max(...) = NaN, if any value is NaN
```


## Min
```jule
#disable boundary
fn Min[T: integer | float](s: ...T): T
```
Returns the minimum value of the slice\. If len\(s\) == 0, it panics\.

Special cases are:<br>
```
Min(...) = NaN, if any value is NaN
```


## MinMax
```jule
#disable boundary
fn MinMax[T: integer | float](s: ...T): (min: T, max: T)
```
Returns the minimum and maximum value of the slice\. It is faster than calling Min and Max functions separately\. If len\(s\) == 0, it panics\.

Special cases are:<br>
```
Min(...) = NaN, if any value is NaN
```


## Sum
```jule
fn Sum[T: numeric](s: ...T): T
```
Returns the sum of all values of the slice\.

Special cases are:<br>
```
Sum(...) = 0, if len(s) == 0
Sum(...) = NaN, if any value is NaN
Sum(...) = NaN, if any (+Inf + -Inf) appears
```


## Linspace
```jule
fn Linspace[T: integer | float](start: T, stop: T, n: int): []T
```
Returns a slice of n evenly spaced values between start and stop, inclusive\.

If n is 0, it returns an empty slice\. If n is 1, the slice contains only start\. Otherwise, it returns n values starting from start and ending at stop, linearly spaced\. It panics if n is negative\.

Special cases are:<br>
```
Linspace(start, NaN, n) = [start, NaN, NaN, NaN, ...]
Linspace(NaN, stop, n) = [NaN, NaN, NaN, NaN, ...]
Linspace(NaN, NaN, n) = [NaN, NaN, NaN, NaN, ...]
Linspace(±Inf, stop, n) = [±Inf, NaN, NaN, NaN, ...]
Linspace(start, ±Inf, n) = [start, ±Inf, ±Inf, ±Inf, ...]
```


## Logspace
```jule
fn Logspace[T: integer | float](start: T, stop: T, n: int, base: f64): []T
```
Returns a slice of n values spaced evenly on a log scale \(with given base\) between base^start and base^stop, inclusive\. It is the exponential \(base^x\) of a linearly spaced range\. It panics if n is negative\.

Special cases are:<br>

- If start, stop or base is NaN or ±Inf, result is undefined, but panic\-safe

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

## Geomspace
```jule
#disable boundary
fn Geomspace[T: integer | float](mut start: T, mut stop: T, n: int): []T
```
Returns a slice of n values spaced evenly on a log scale \(base 10\) between start and stop, inclusive\. The output is such that each element is the geometric progression from start to stop\. It is equivalent to Logspace\(log10\(start\), log10\(stop\), n, 10\) as computation\. It panics if n is negative\.

Special cases are:<br>

- If start or stop is zero, or if they have different signs, the result is undefined and may contain NaNs\.
- If start or stop is NaN or ±Inf, result is undefined, but panic\-safe

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

## Range
```jule
#disable boundary
fn Range[T: integer | float](mut start: T, stop: T, step: T): []T
```
Returns a slice of evenly spaced values within a given interval\. The sequence starts at start, increments by step, and stops before stop\. If step is zero, the function will panic to prevent an infinite loop\. When using a non\-integer step, such as 0\.1, it is often better to use Linspace\.

Special cases are:<br>
```
Range(NaN, stop, step) = []
Range(start, NaN, step) = []
Range(start, stop, NaN) = []
Range(±Inf, stop, step) = undefined, may cause panic
Range(start, ±Inf, step) = undefined, may cause panic
Range(start, stop, ±Inf) = undefined, may cause panic
```


## Digamma
```jule
fn Digamma(mut x: f64): (result: f64)
```
Returns the logorithmic derivative of the gamma function at x\.

```
ψ(x) = d/dx (Ln (Γ(x)).
```


## Round
```jule
fn Round(mut x: f64, prec: int): f64
```
Returns the half away from zero rounded value of x with precision\.

Special cases are:<br>
```
Round(±0, prec) = +0
Round(±Inf, prec) = ±Inf
Round(NaN, prec) = NaN
```


## RoundEven
```jule
fn RoundEven(mut x: f64, prec: int): f64
```
Returns the half even rounded value of x with precision\.

Special cases are:<br>
```
RoundEven(±0, prec) = +0
RoundEven(±Inf, prec) = ±Inf
RoundEven(NaN, prec) = NaN
```


## RegIncBeta
```jule
fn RegIncBeta(a: f64, b: f64, x: f64): f64
```
Returns the value of the regularized incomplete beta function I\(x;a,b\)\. It is defined as

```
I(x;a,b) = B(x;a,b) / B(a,b)
         = Γ(a+b) / (Γ(a)*Γ(b)) * int_0^x u^(a-1) * (1-u)^(b-1) du.
```
The domain of definition is 0 &lt;= x &lt;= 1, and the parameters a and b must be positive\. For other values of x, a, and b, it will panic\.

## InvRegIncBeta
```jule
fn InvRegIncBeta(a: f64, b: f64, y: f64): f64
```
Computes the inverse of the regularized incomplete beta function\. It returns the x for which

```
y = I(x;a,b)
```
The domain of definition is 0 &lt;= y &lt;= 1, and the parameters a and b must be positive\. For other values of x, a, and b, it will panic\.