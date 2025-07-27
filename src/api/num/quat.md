# julenum/num/quat

Package for quaternion numbers.

## Index

[fn NaN\(\): Quat](#nan)\
[fn Inf\(sign: int\): Quat](#inf)\
[fn AxisAngle\(x: f64, y: f64, z: f64, radians: f64\): Quat](#axisangle)\
[struct Quat](#quat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NaN\(\*self\): bool](#nan-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Inf\(\*self\): bool](#inf-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Inv\(mut \*self, &amp;q: \*Quat\)](#inv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exp\(mut \*self, &amp;q: \*Quat\)](#exp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Log\(mut \*self, &amp;q: \*Quat\)](#log)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow\(mut \*self, &amp;q: \*Quat, &amp;r: \*Quat\)](#pow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PowReal\(mut \*self, &amp;q: \*Quat, r: f64\)](#powreal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sqrt\(mut \*self, &amp;q: \*Quat\)](#sqrt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sin\(mut \*self, &amp;q: \*Quat\)](#sin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sinh\(mut \*self, &amp;q: \*Quat\)](#sinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cos\(mut \*self, &amp;q: \*Quat\)](#cos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cosh\(mut \*self, &amp;q: \*Quat\)](#cosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tan\(mut \*self, &amp;q: \*Quat\)](#tan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tanh\(mut \*self, &amp;q: \*Quat\)](#tanh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asin\(mut \*self, &amp;q: \*Quat\)](#asin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asinh\(mut \*self, &amp;q: \*Quat\)](#asinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acos\(mut \*self, &amp;q: \*Quat\)](#acos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acosh\(mut \*self, &amp;q: \*Quat\)](#acosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atan\(mut \*self, &amp;q: \*Quat\)](#atan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atanh\(mut \*self, &amp;q: \*Quat\)](#atanh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs\(\*self\): f64](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self\): bool](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;q: \*Quat, k: f64\)](#scale)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Norm\(\*self\): f64](#norm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;q: \*Quat\)](#normalize)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Conj\(mut \*self, &amp;q: \*Quat\)](#conj)



## NaN
```jule
fn NaN(): Quat
```
Returns a quaternion NaN\.

## Inf
```jule
fn Inf(sign: int): Quat
```
Returns a quaternion ±infinity by sign\.

## AxisAngle
```jule
fn AxisAngle(x: f64, y: f64, z: f64, radians: f64): Quat
```
Returns a unit quaternion representing a rotation around the given axis \(x, y, z\) by the specified angle in radians\.

Components of the rotation axis vector\. Rotation vector is assumed \(but not enforced\) that this is a unit vector\.

## Quat
```jule
struct Quat {
	W: f64
	X: f64
	Y: f64
	Z: f64
}
```
Quaternion with floating\-point precision\.

### NaN
```jule
fn NaN(*self): bool
```
Reports whether any field of quaternion is NaN and none are an infinity\.

### Inf
```jule
fn Inf(*self): bool
```
Reports whether any of field of quaternion is ±infinity\.

### Inv
```jule
fn Inv(mut *self, &q: *Quat)
```
Sets self to the quaternion inverse of q\.

### Exp
```jule
fn Exp(mut *self, &q: *Quat)
```
Sets self to the product e\*\*q, the base\-e exponential of q\.

### Log
```jule
fn Log(mut *self, &q: *Quat)
```
Sets self to the natural logarithm of q\.

### Pow
```jule
fn Pow(mut *self, &q: *Quat, &r: *Quat)
```
Sets self to the product q\*\*r, the base\-q exponential of r\. For generalized compatibility with math::Pow:

```
Pow(0, ±0) returns 1+0i+0j+0k
Pow(0, r) for W(r)<0 returns Inf+0i+0j+0k if X(r), Y(r), Z(r) are zero,
    otherwise Inf+Inf i+Inf j+Inf k.
```


### PowReal
```jule
fn PowReal(mut *self, &q: *Quat, r: f64)
```
Sets self to the product q\*\*r, the base\-q exponential of r\. For generalized compatibility with math::Pow:

```
PowReal(0, ±0) returns 1+0i+0j+0k
PowReal(0, c) for c<0 returns Inf+0i+0j+0k.
```


### Sqrt
```jule
fn Sqrt(mut *self, &q: *Quat)
```
Sets self to the √q\.

### Sin
```jule
fn Sin(mut *self, &q: *Quat)
```
Sets self to the sine of q\.

### Sinh
```jule
fn Sinh(mut *self, &q: *Quat)
```
Sets self to the hyperbolic sine of q\.

### Cos
```jule
fn Cos(mut *self, &q: *Quat)
```
Sets self to the cosine of q\.

### Cosh
```jule
fn Cosh(mut *self, &q: *Quat)
```
Sets self to the hyperbolic cosine of q\.

### Tan
```jule
fn Tan(mut *self, &q: *Quat)
```
Sets self to the tangent of q\.

### Tanh
```jule
fn Tanh(mut *self, &q: *Quat)
```
Sets self the hyperbolic tangent of q\.

### Asin
```jule
fn Asin(mut *self, &q: *Quat)
```
Sets self to the inverse sine of q\.

### Asinh
```jule
fn Asinh(mut *self, &q: *Quat)
```
Sets self to the inverse hyperbolic sine of q\.

### Acos
```jule
fn Acos(mut *self, &q: *Quat)
```
Sets self to the inverse cosine of q\.

### Acosh
```jule
fn Acosh(mut *self, &q: *Quat)
```
Sets self to the inverse hyperbolic cosine of q\.

### Atan
```jule
fn Atan(mut *self, &q: *Quat)
```
Atan returns the inverse tangent of q\.

### Atanh
```jule
fn Atanh(mut *self, &q: *Quat)
```
Atanh returns the inverse hyperbolic tangent of q\.

### Abs
```jule
fn Abs(*self): f64
```
Returns the absolute value \(also called the modulus\) of quaternion\.

Special cases are:<br>
```
Abs() = +Inf, if quaternion is ±Inf.
Abs() = NaN, if quaternion is NaN
```


### Zero
```jule
fn Zero(*self): bool
```
Reports whether all fields of quaternion are zero\.

### Add
```jule
fn Add(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the sum of x\+y\.

### Sub
```jule
fn Sub(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the difference x\-y\.

### Mul
```jule
fn Mul(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the Hamiltonian product x\*y\.

### Scale
```jule
fn Scale(mut *self, &q: *Quat, k: f64)
```
Sets self to q scaled by k\.

### Norm
```jule
fn Norm(*self): f64
```
Returns the norm \(magnitude or length\) of the quaternion\.

### Normalize
```jule
fn Normalize(mut *self, &q: *Quat)
```
Sets self to normalized quaternion q\.

### Conj
```jule
fn Conj(mut *self, &q: *Quat)
```
Sets self to the quaternion conjugate of q\.