# julenum/interp

Package for interpolation computations.

## Index

[fn Linear\(x: f64, xp: \[\]f64, fp: \[\]f64\): f64](#linear)\
[fn Lagrange\(x: f64, xp: \[\]f64, fp: \[\]f64\): f64](#lagrange)\
[fn Newton\(x: f64, xp: \[\]f64, fp: \[\]f64\): f64](#newton)\
[struct Barycentric](#barycentric)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Init\(mut \*self, mut xp: \[\]f64, mut fp: \[\]f64, tol: f64\)](#init)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Interpolate\(\*self, x: f64\): f64](#interpolate)



## Linear
```jule
#disable boundary
fn Linear(x: f64, xp: []f64, fp: []f64): f64
```
Computes one\-dimensional piecewise linear interpolation\.

Given a set of monotonically increasing sample points xp and their corresponding function values fp, it estimates the value of the underlying function at a point x by linear interpolation between the nearest points in xp\.

xp must be sorted in strictly ascending order, otherwise the result is undefined\. xp and fp must be have same length and non\-empty\.

Boundary behavior:<br>

- If x &lt; xp\[0\], it returns fp\[0\] \(constant extrapolation\)\.
- If x &gt; xp\[len\(xp\)\-1\], it returns fp\[len\(fp\)\-1\] \(constant extrapolation\)\.

## Lagrange
```jule
#disable boundary
fn Lagrange(x: f64, xp: []f64, fp: []f64): f64
```
Computes Lagrange polynomial interpolation for given points \(xp, fp\) and evaluates the polynomial at x\.

xp and fp slices must be of the same length &gt; 0, and xp points should be distinct\.

Mathematically, the Lagrange interpolation polynomial is defined as:

```
P(x) = ∑_{j=0}^{n-1} [ fⱼ * Lⱼ(x) ], where:
Lⱼ(x) = ∏_{m=0, m≠j}^{n-1} [ (x - xₘ) / (xⱼ - xₘ) ]
```


## Newton
```jule
#disable boundary
fn Newton(x: f64, xp: []f64, fp: []f64): f64
```
Computes Newton polynomial interpolation for given points \(xp, fp\) and evaluates the polynomial at x\.

xp and fp slices must be of the same length &gt; 0, and xp points should be distinct\.

Mathematically, the Newton interpolation polynomial is defined as:

```
P(x) = f₀ + ∑_{j=1}^{n-1} [ f[x₀, x₁, ..., xⱼ] * ∏_{m=0}^{j-1} (x - xₘ) ], where:
f[x₀, x₁, ..., xⱼ] are the divided differences computed recursively by:
	f[xⱼ] = fⱼ,
	f[xᵢ, ..., x_{i+k}] = (f[x_{i+1}, ..., x_{i+k}] - f[xᵢ, ..., x_{i+k-1}]) / (x_{i+k} - xᵢ)
```


## Barycentric
```jule
struct Barycentric {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements Barycentric form of Lagrange polynomial interpolation\.

Given distinct sample points xp and their corresponding values fp, it precomputes Barycentric weights wⱼ:

```
wⱼ = 1 / ∏_{m=0, m≠j}^{n-1} [ (xⱼ - xₘ) ]
```
The interpolation polynomial at point x is then evaluated by:

```
P(x) = ∑_{j=0}^{n-1} [ (wⱼ / (x - xⱼ)) * fⱼ ] / ∑_{j=0}^{n-1} [ wⱼ / (x - xⱼ) ]
```
If x coincides with some xⱼ, P\(x\) = fⱼ exactly \(no division by zero\)\.

This form is numerically stable and efficient for multiple evaluations\.

### Init
```jule
#disable boundary
fn Init(mut *self, mut xp: []f64, mut fp: []f64, tol: f64)
```
Initializes the Barycentric interpolator for given points\. xp and fp must have the same length \(&gt;0\) and contain distinct points\. It precomputes Barycentric weights wⱼ used in interpolation\.

Uses mutable copy of xp and fp\. The behavior and results are undefined, if any mutation performed after initialization\.

### Interpolate
```jule
#disable boundary
fn Interpolate(*self, x: f64): f64
```
Computes the Barycentric interpolation polynomial at x\.

If x equals some sample point xpⱼ, returns fpⱼ directly\.

Otherwise, computes:

```
P(x) = ∑ⱼ [ wⱼ / (x - xⱼ)) * fⱼ ] / ∑ⱼ [ wⱼ / (x - xⱼ) ]
```
Interpolation must be initialized by Init, otherwise behavior is undefined\.