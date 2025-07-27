# julenum/num/dual

Package for dual numbers.

## Index

[struct Dual](#dual)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self\): bool](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Dual, &amp;y: \*Dual\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Dual, &amp;y: \*Dual\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Dual, &amp;y: \*Dual\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;d: \*Dual, k: f64\)](#scale)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Inv\(mut \*self, &amp;d: \*Dual\)](#inv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Abs\(mut \*self, &amp;d: \*Dual\)](#abs)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PowReal\(mut \*self, &amp;d: \*Dual, p: f64\)](#powreal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow\(mut \*self, &amp;d: \*Dual, &amp;p: \*Dual\)](#pow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sqrt\(mut \*self, &amp;d: \*Dual\)](#sqrt)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Exp\(mut \*self, &amp;d: \*Dual\)](#exp)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Log\(mut \*self, &amp;d: \*Dual\)](#log)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sin\(mut \*self, &amp;d: \*Dual\)](#sin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cos\(mut \*self, &amp;d: \*Dual\)](#cos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tan\(mut \*self, &amp;d: \*Dual\)](#tan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asin\(mut \*self, &amp;d: \*Dual\)](#asin)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acos\(mut \*self, &amp;d: \*Dual\)](#acos)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atan\(mut \*self, &amp;d: \*Dual\)](#atan)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sinh\(mut \*self, &amp;d: \*Dual\)](#sinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cosh\(mut \*self, &amp;d: \*Dual\)](#cosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Tanh\(mut \*self, &amp;d: \*Dual\)](#tanh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Asinh\(mut \*self, &amp;d: \*Dual\)](#asinh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Acosh\(mut \*self, &amp;d: \*Dual\)](#acosh)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Atanh\(mut \*self, &amp;d: \*Dual\)](#atanh)



## Dual
```jule
struct Dual {
	X: f64
	Y: f64
}
```
Dual with floating\-point precision\.

### Zero
```jule
fn Zero(*self): bool
```
Reports whether all fields of dual are zero\.

### Add
```jule
fn Add(mut *self, &x: *Dual, &y: *Dual)
```
Sets self to the sum x\+y\.

### Sub
```jule
fn Sub(mut *self, &x: *Dual, &y: *Dual)
```
Sets self to the difference x\-y\.

### Mul
```jule
fn Mul(mut *self, &x: *Dual, &y: *Dual)
```
Sets self to the product x\*y\.

### Scale
```jule
fn Scale(mut *self, &d: *Dual, k: f64)
```
Sets self to d scaled by k\.

### Inv
```jule
fn Inv(mut *self, &d: *Dual)
```
Sets self to inverse of d\.

Special cases are:<br>
```
Inv(±Inf) = ±0-0ϵ
Inv(±0) = ±Inf-Infϵ
```


### Abs
```jule
fn Abs(mut *self, &d: *Dual)
```
Sets self to absolute value of d\.

### PowReal
```jule
fn PowReal(mut *self, &d: *Dual, p: f64)
```
Sets self to the product d\*\*p, the base\-d exponential of p\.

Special cases are \(in order\):<br>
```
PowReal(NaN+xϵ, ±0) = 1+NaNϵ for any d
PowReal(d, ±0) = 1 for any d
PowReal(1+xϵ, p) = 1+xyϵ for any p
PowReal(d, 1) = d for any d
PowReal(NaN+xϵ, p) = NaN+NaNϵ
PowReal(d, NaN) = NaN+NaNϵ
PowReal(±0, p) = ±Inf for p an odd integer < 0
PowReal(±0, -Inf) = +Inf
PowReal(±0, +Inf) = +0
PowReal(±0, p) = +Inf for finite p < 0 and not an odd integer
PowReal(±0, p) = ±0 for p an odd integer > 0
PowReal(±0, p) = +0 for finite p > 0 and not an odd integer
PowReal(-1, ±Inf) = 1
PowReal(d+0ϵ, +Inf) = +Inf+NaNϵ for |d| > 1
PowReal(d+yϵ, +Inf) = +Inf for |d| > 1
PowReal(d, -Inf) = +0+NaNϵ for |d| > 1
PowReal(d, +Inf) = +0+NaNϵ for |d| < 1
PowReal(d+0ϵ, -Inf) = +Inf+NaNϵ for |d| < 1
PowReal(d, -Inf) = +Inf-Infϵ for |d| < 1
PowReal(+Inf, p) = +Inf for p > 0
PowReal(+Inf, p) = +0 for p < 0
PowReal(-Inf, p) = Pow(-0, -p)
PowReal(d, p) = NaN+NaNϵ for finite d < 0 and finite non-integer y
```


### Pow
```jule
fn Pow(mut *self, &d: *Dual, &p: *Dual)
```
Sets self to the product d\*\*p, the base\-d exponential of p\.

### Sqrt
```jule
fn Sqrt(mut *self, &d: *Dual)
```
Sets self to the square root of d\.

Special cases are:<br>
```
Sqrt(+Inf) = +Inf
Sqrt(±0) = (±0+Infϵ)
Sqrt(x < 0) = NaN
Sqrt(NaN) = NaN
```


### Exp
```jule
fn Exp(mut *self, &d: *Dual)
```
Sets self to product e\*\*d, the base\-e exponential of d\.

Special cases are:<br>
```
Exp(+Inf) = +Inf
Exp(NaN) = NaN
```
Very large values overflow to 0 or \+Inf\. Very small values underflow to 1\.

### Log
```jule
fn Log(mut *self, &d: *Dual)
```
Sets self to the natural logarithm of d\.

Special cases are:<br>
```
Log(+Inf) = (+Inf+0ϵ)
Log(0) = (-Inf±Infϵ)
Log(x < 0) = NaN
Log(NaN) = NaN
```


### Sin
```jule
fn Sin(mut *self, &d: *Dual)
```
Sets self to the sine of d\.

Special cases are:<br>
```
Sin(±0) = (±0+Nϵ)
Sin(±Inf) = NaN
Sin(NaN) = NaN
```


### Cos
```jule
fn Cos(mut *self, &d: *Dual)
```
Sets self to the cosine of d\.

Special cases are:<br>
```
Cos(±Inf) = NaN
Cos(NaN) = NaN
```


### Tan
```jule
fn Tan(mut *self, &d: *Dual)
```
Sets self to the tangent of d\.

Special cases are:<br>
```
Tan(±0) = (±0+Nϵ)
Tan(±Inf) = NaN
Tan(NaN) = NaN
```


### Asin
```jule
fn Asin(mut *self, &d: *Dual)
```
Sets self to the inverse sine of d\.

Special cases are:<br>
```
Asin(±0) = (±0+Nϵ)
Asin(±1) = (±Inf+Infϵ)
Asin(x) = NaN if x < -1 or x > 1
```


### Acos
```jule
fn Acos(mut *self, &d: *Dual)
```
Sets self to the inverse cosine of d\.

Special cases are:<br>
```
Acos(-1) = (Pi-Infϵ)
Acos(1) = (0-Infϵ)
Acos(x) = NaN if x < -1 or x > 1
```


### Atan
```jule
fn Atan(mut *self, &d: *Dual)
```
Sets self to the inverse tangent of d\.

Special cases are:<br>
```
Atan(±0) = (±0+Nϵ)
Atan(±Inf) = (±Pi/2+0ϵ)
```


### Sinh
```jule
fn Sinh(mut *self, &d: *Dual)
```
Sets self to the hyperbolic sine of d\.

Special cases are:<br>
```
Sinh(±0) = (±0+Nϵ)
Sinh(±Inf) = ±Inf
Sinh(NaN) = NaN
```


### Cosh
```jule
fn Cosh(mut *self, &d: *Dual)
```
Sets self to the hyperbolic cosine of d\.

Special cases are:<br>
```
Cosh(±0) = 1
Cosh(±Inf) = +Inf
Cosh(NaN) = NaN
```


### Tanh
```jule
fn Tanh(mut *self, &d: *Dual)
```
Sets self to the hyperbolic tangent of d\.

Special cases are:<br>
```
Tanh(±0) = (±0+Nϵ)
Tanh(±Inf) = (±1+0ϵ)
Tanh(NaN) = NaN
```


### Asinh
```jule
fn Asinh(mut *self, &d: *Dual)
```
Sets self to the inverse hyperbolic sine of d\.

Special cases are:<br>
```
Asinh(±0) = (±0+Nϵ)
Asinh(±Inf) = ±Inf
Asinh(NaN) = NaN
```


### Acosh
```jule
fn Acosh(mut *self, &d: *Dual)
```
Sets self to the inverse hyperbolic cosine of d\.

Special cases are:<br>
```
Acosh(+Inf) = +Inf
Acosh(1) = (0+Infϵ)
Acosh(x) = NaN if x < 1
Acosh(NaN) = NaN
```


### Atanh
```jule
fn Atanh(mut *self, &d: *Dual)
```
Set self to the inverse hyperbolic tangent of d\.

Special cases are:<br>
```
Atanh(1) = +Inf
Atanh(±0) = (±0+Nϵ)
Atanh(-1) = -Inf
Atanh(x) = NaN if x < -1 or x > 1
Atanh(NaN) = NaN
```