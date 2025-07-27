# julenum/num/dualquat

Package for dual-quaternion numbers.

## Index

[struct Quat](#quat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PowReal\(mut \*self, &amp;q: \*Quat, p: f64\)](#powreal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow\(mut \*self, &amp;q: \*Quat, &amp;p: \*Quat\)](#pow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sqrt\(mut \*self, &amp;q: \*Quat\)](#sqrt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exp\(mut \*self, &amp;q: \*Quat\)](#exp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Log\(mut \*self, &amp;q: \*Quat\)](#log)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self\): bool](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Quat, &amp;y: \*Quat\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;q: \*Quat, k: f64\)](#scale)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Inv\(mut \*self, &amp;q: \*Quat\)](#inv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs\(\*self\): dual::Dual](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Conj\(mut \*self, &amp;q: \*Quat\)](#conj)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ConjY\(mut \*self, &amp;q: \*Quat\)](#conjy)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ConjQuat\(mut \*self, &amp;q: \*Quat\)](#conjquat)



## Quat
```jule
struct Quat {
	X: quat::Quat
	Y: quat::Quat
}
```
Dual quaternion with floating\-point precision\.

### PowReal
```jule
fn PowReal(mut *self, &q: *Quat, p: f64)
```
Sets self to q\*\*p, the base\-q exponential of p\.

Special cases are \(in order\):<br>
```
PowReal(NaN+xϵ, ±0) = 1+NaNϵ for any q
PowReal(q, ±0) = 1 for any q
PowReal(1+xϵ, p) = 1+xyϵ for any p
PowReal(q, 1) = q for any q
PowReal(NaN+xϵ, p) = NaN+NaNϵ
PowReal(q, NaN) = NaN+NaNϵ
PowReal(±0, p) = ±Inf for p an odd integer < 0
PowReal(±0, -Inf) = +Inf
PowReal(±0, +Inf) = +0
PowReal(±0, p) = +Inf for finite p < 0 and not an odd integer
PowReal(±0, p) = ±0 for p an odd integer > 0
PowReal(±0, p) = +0 for finite p > 0 and not an odd integer
PowReal(-1, ±Inf) = 1
PowReal(q+0ϵ, +Inf) = +Inf+NaNϵ for |q| > 1
PowReal(q+yϵ, +Inf) = +Inf for |q| > 1
PowReal(q, -Inf) = +0+NaNϵ for |q| > 1
PowReal(q, +Inf) = +0+NaNϵ for |q| < 1
PowReal(q+0ϵ, -Inf) = +Inf+NaNϵ for |q| < 1
PowReal(q, -Inf) = +Inf-Infϵ for |q| < 1
PowReal(+Inf, p) = +Inf for p > 0
PowReal(+Inf, p) = +0 for p < 0
PowReal(-Inf, p) = Pow(-0, -p)
```


### Pow
```jule
fn Pow(mut *self, &q: *Quat, &p: *Quat)
```
Sets self to the product q\*\*p, the base\-q exponential of p\.

### Sqrt
```jule
fn Sqrt(mut *self, &q: *Quat)
```
Sets self to the square root of q

Special cases are:<br>
```
Sqrt(+Inf) = +Inf
Sqrt(±0) = (±0+Infϵ)
Sqrt(x < 0) = NaN
Sqrt(NaN) = NaN
```


### Exp
```jule
fn Exp(mut *self, &q: *Quat)
```
Sets self to e\*\*q, the base\-e exponential of q\.

Special cases are:<br>
```
Exp(+Inf) = +Inf
Exp(NaN) = NaN
```
Very large values overflow to 0 or \+Inf\. Very small values underflow to 1\.

### Log
```jule
fn Log(mut *self, &q: *Quat)
```
Sets self to the natural logarithm of q\.

Special cases are:<br>
```
Log(+Inf) = (+Inf+0ϵ)
Log(0) = (-Inf±Infϵ)
Log(x < 0) = NaN
Log(NaN) = NaN
```


### Zero
```jule
fn Zero(*self): bool
```
Reports whether all fields of dual quaternion are zero\.

### Add
```jule
fn Add(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the sum x\+y\.

### Sub
```jule
fn Sub(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the difference x\-y\.

### Mul
```jule
fn Mul(mut *self, &x: *Quat, &y: *Quat)
```
Sets self to the product x\*y\.

### Scale
```jule
fn Scale(mut *self, &q: *Quat, k: f64)
```
Sets self to q scaled by k\.

### Inv
```jule
fn Inv(mut *self, &q: *Quat)
```
Sets self to inverse of q\.

### Abs
```jule
fn Abs(*self): dual::Dual
```
Returns absolute value of dual quaternion\.

### Conj
```jule
fn Conj(mut *self, &q: *Quat)
```
Sets self to the dual quaternion conjugate of q₁\+q₂ϵ, q̅₁\-q̅₂ϵ\.

### ConjY
```jule
fn ConjY(mut *self, &q: *Quat)
```
Sets self to the dual conjugate of q₁\+q₂ϵ, q₁\-q₂ϵ\.

### ConjQuat
```jule
fn ConjQuat(mut *self, &q: *Quat)
```
Sets self to the quaternion conjugate of q₁\+q₂ϵ, q̅₁\+q̅₂ϵ\.