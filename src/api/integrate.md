# julenum/integrate

Package to compute an integral given a specific list of evaluations.

::: v-pre

## Index

[fn Gaussian\[T: integer \| float\]\(x: \[\]T, f: \[\]T\): T](#gaussian)\
[fn Romberg\[T: integer \| float\]\(f: \[\]T, dx: T\): T](#romberg)\
[fn Simpsons\[T: integer \| float\]\(x: \[\]T, f: \[\]T\): T](#simpsons)\
[fn Trapezoidal\[T: integer \| float\]\(x: \[\]T, f: \[\]T\): T](#trapezoidal)



## Gaussian
```jule
fn Gaussian[T: integer | float](x: []T, f: []T): T
```
Returns an approximate value of the integral

\\int\_a^b f\(x\) dx

computed using the 3\-point Composite Gauss\-Legendre Quadrature rule\.

The slice x represents the segment boundaries defining subintervals \[x\[i\], x\[i\+1\]\]\. The slice f contains the function samples evaluated at 3 Gauss nodes within each subinterval:

For subinterval i, the 3 nodes in physical space are: x\_i,0 = mid \- half \* sqrt\(3/5\) x\_i,1 = mid x\_i,2 = mid \+ half \* sqrt\(3/5\) where mid = \(x\[i\+1\] \+ x\[i\]\)/2 and half = \(x\[i\+1\] \- x\[i\]\)/2\.

Thus, len\(f\) must be equal to 3 \* \(len\(x\) \- 1\)\. The slice x must be sorted in strictly increasing order and len\(x\) &gt;= 2\.

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

## Romberg
```jule
fn Romberg[T: integer | float](f: []T, dx: T): T
```
Returns an approximate value of the integral

```
\int_a^b f(x)dx
```
computed using the Romberg&#39;s method\. The function f is given as a slice of equally\-spaced samples, that is,

```
f[i] = f(a + i*dx)
```
and dx is the spacing between the samples\.

The length of f must be 2^k \+ 1, where k is a positive integer, and dx must be positive\.

See https://en\.wikipedia\.org/wiki/Romberg%27s\_method for a description of the algorithm\.

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

## Simpsons
```jule
fn Simpsons[T: integer | float](x: []T, f: []T): T
```
Returns an approximate value of the integral

```
\int_a^b f(x)dx
```
computed using the Simpsons&#39;s method\. The function f is given as a slice of samples evaluated at locations in x, that is,

```
f[i] = f(x[i]), x[0] = a, x[len(x)-1] = b
```
The slice x must be sorted in strictly increasing order\. x and f must be of equal length and the length must be at least 3\.

See https://en\.wikipedia\.org/wiki/Simpson%27s\_rule\#Composite\_Simpson&#39;s\_rule\_for\_irregularly\_spaced\_data for more information\.

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

## Trapezoidal
```jule
fn Trapezoidal[T: integer | float](x: []T, f: []T): T
```
Returns an approximate value of the integral

```
\int_a^b f(x) dx
```
computed using the trapezoidal rule\. The function f is given as a slice of samples evaluated at locations in x, that is,

```
f[i] = f(x[i]), x[0] = a, x[len(x)-1] = b
```
The slice x must be sorted in strictly increasing order\. x and f must be of equal length and the length must be at least 2\.

The trapezoidal rule approximates f by a piecewise linear function and estimates

```
\int_x[i]^x[i+1] f(x) dx
```
as

```
(x[i+1] - x[i]) * (f[i] + f[i+1])/2
```
More details on the trapezoidal rule can be found at: https://en\.wikipedia\.org/wiki/Trapezoidal\_rule

Computations are performed using 64\-bit floating\-point precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use 64\-bit floating\-point type\.

:::