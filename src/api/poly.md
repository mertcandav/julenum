# julenum/poly

Package for polynomials.

::: v-pre

## Index

[type Dense](#dense)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set\(mut \*self, coefficients: \[\]f64, tol: f64\)](#set)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Simplify\(mut \*self, &amp;p: \*Dense, tol: f64\)](#simplify)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LeadingCoef\(\*self\): f64](#leadingcoef)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self, tol: f64\): bool](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Degree\(\*self\): int](#degree)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Negate\(mut \*self, &amp;x: \*Dense\)](#negate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Copy\(mut \*self, &amp;x: \*Dense\)](#copy)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, tol: f64\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, tol: f64\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;x: \*Dense, k: f64, tol: f64\)](#scale)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulNaive\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense\)](#mulnaive)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulTol\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, tol: f64\)](#multol)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulFFT\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, tol: f64\)](#mulfft)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivMod\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, mut &amp;rem: \*Dense\)](#divmod)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivModNaive\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, mut &amp;rem: \*Dense, tol: f64\)](#divmodnaive)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivModFFT\(mut \*self, &amp;x: \*Dense, &amp;y: \*Dense, mut &amp;rem: \*Dense, tol: f64\)](#divmodfft)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Deriv\(mut \*self, &amp;x: \*Dense\)](#deriv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Integral\(mut \*self, &amp;x: \*Dense, C: f64\)](#integral)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Eval\(\*self, x: f64\): f64](#eval)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow\(mut \*self, &amp;x: \*Dense, mut n: int\)](#pow)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;x: \*Dense, tol: f64\)](#normalize)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn InterpolateLinear\(mut \*self, x0: f64, y0: f64, x1: f64, y1: f64\)](#interpolatelinear)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendFormat\(\*self, mut buf: \[\]byte\): \[\]byte](#appendformat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string)\
[struct Term](#term)\
[type Sparse](#sparse)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set\(mut \*self, terms: \[\]Term, tol: f64\)](#set-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LeadingCoef\(\*self\): f64](#leadingcoef-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self, tol: f64\): bool](#zero-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Degree\(\*self\): int](#degree-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Negate\(mut \*self, &amp;x: \*Sparse\)](#negate-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Copy\(mut \*self, &amp;x: \*Sparse\)](#copy-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Simplify\(mut \*self, &amp;p: \*Sparse, tol: f64\)](#simplify-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#add-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#sub-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;x: \*Sparse, k: f64, tol: f64\)](#scale-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse\)](#mul-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulNaive\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse\)](#mulnaive-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulTol\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#multol-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulFFT\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#mulfft-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivMod\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, mut &amp;rem: \*Sparse\)](#divmod-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivModNaive\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, mut &amp;rem: \*Sparse\)](#divmodnaive-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn DivModFFT\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, mut &amp;rem: \*Sparse\)](#divmodfft-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Deriv\(mut \*self, &amp;x: \*Sparse\)](#deriv-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Integral\(mut \*self, &amp;x: \*Sparse, C: f64\)](#integral-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Eval\(\*self, x: f64\): f64](#eval-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn GCD\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#gcd)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LCM\(mut \*self, &amp;x: \*Sparse, &amp;y: \*Sparse, tol: f64\)](#lcm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Pow\(mut \*self, &amp;x: \*Sparse, mut n: int\)](#pow-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;x: \*Sparse, tol: f64\)](#normalize-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn InterpolateLinear\(mut \*self, x0: f64, y0: f64, x1: f64, y1: f64\)](#interpolatelinear-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn InterpolateLagrange\(mut \*self, xs: \[\]f64, ys: \[\]f64, tol: f64\)](#interpolatelagrange)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendFormat\(\*self, mut buf: \[\]byte\): \[\]byte](#appendformat-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn String\(\*self\): string](#string-1)



## Dense
```jule
type Dense: []f64
```
Represents a polynomial by storing all coefficients from the constant term to the highest\-degree term\.

For a polynomial:

```
P(x) = a₀ + a₁*x + a₂*x² + ... + aₙ*xⁿ
```
the coefficient at index i is the coefficient of xⁱ\.

For example:

```
3x² - 4x + 7 -> Dense{7, -4, 3}
```
The zero polynomial is represented by an empty slice\.

Coefficients are stored in ascending order of exponent:<br>
```
coefficients[0] = coefficient of x⁰
coefficients[1] = coefficient of x¹
...
coefficients[n] = coefficient of xⁿ
```
The last coefficient must be non\-zero for a non\-zero polynomial\. Any corruption of this invariant is undefined behavior\.

Capacity of the underlying slice is never changed for values; i\.e\. there are no 3\-operand slice expressions\. Any corruption of this rule is undefined behavior\.

### Set
```jule
#disable boundary
fn Set(mut *self, coefficients: []f64, tol: f64)
```
Sets self to the given coefficients\.

Coefficients are ordered by increasing exponent, where coefficients\[i\] is the coefficient of xⁱ\.

Coefficients that are zero within tolerance are removed\. Since Dense stores coefficients by exponent, removing an interior coefficient means setting it to zero, while trailing zero coefficients are removed from the representation\.

The resulting polynomial is always in simplified canonical form\.

If self has enough capacity, Set will reuse it to avoid allocation\. If coefficients is empty, self will be zero\-length but keeps its capacity\.

### Simplify
```jule
fn Simplify(mut *self, &p: *Dense, tol: f64)
```
Sets self to simplified form of polynomial p\.

Coefficients that are zero within tolerance are set to zero\. Trailing zero coefficients are removed\.

Result is stored in canonical Dense representation: the zero polynomial has length zero, and the highest\-degree coefficient of a non\-zero polynomial is non\-zero\.

If self has enough capacity, Simplify will use it to avoid making allocation\. If length is zero, self will be zero\-length but keeps its internal allocation\.

### LeadingCoef
```jule
fn LeadingCoef(*self): f64
```
Returns the leading coefficient of the polynomial\. Panics if polynomial is zero\.

### Zero
```jule
fn Zero(*self, tol: f64): bool
```
Reports whether polynomial is zero within tolerance\.

### Degree
```jule
fn Degree(*self): int
```
Returns the degree of the polynomial \(highest exponent\)\. Returns \-1 for the zero polynomial\.

### Negate
```jule
#disable boundary
fn Negate(mut *self, &x: *Dense)
```
Sets self to negated coefficients of the polynomial x\. For example, \(3x^2 \- 4x \+ 1\) becomes \(\-3x^2 \+ 4x \- 1\)\.

If self has enough capacity, Negate will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Copy
```jule
fn Copy(mut *self, &x: *Dense)
```
Copies polynomial x to self\.

If self has enough capacity, Copy will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Add
```jule
#disable nilptr boundary
fn Add(mut *self, &x: *Dense, &y: *Dense, tol: f64)
```
Sets self to sum x\+y\.

If self has enough capacity, Add will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Sub
```jule
#disable nilptr boundary
fn Sub(mut *self, &x: *Dense, &y: *Dense, tol: f64)
```
Sets self to difference x\-y\.

If self has enough capacity, Sub will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Scale
```jule
#disable boundary
fn Scale(mut *self, &x: *Dense, k: f64, tol: f64)
```
Sets self to scaled coefficients of x by scalar k\. For example, if k = 2, \(3x^2 \- x\) becomes \(6x^2 \- 2x\)\.

If self have enough capacity, Scale will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Mul
```jule
fn Mul(mut *self, &x: *Dense, &y: *Dense)
```
Sets self to product x\*y\.

It is equivalent to MulTol\(x, y, tol\), but determines tolerance dynamically\. Dynamic tolerance value might not be suitable for some cases\. Use MulTol with custom tolerance when needed, especially for precise and small coefficients like 1e\-14\.

For minimum rounding\-errors, use MulNaive to force native algorithms\. Naive algorithm is slower than FFT, but it is more accurate\.

If self have enough capacity, Mul will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulNaive
```jule
fn MulNaive(mut *self, &x: *Dense, &y: *Dense)
```
Sets self to product x\*y\.

Like Mul but forces the naive algorithm and never uses FFT\. Provides more accurate results, but slower for large polynomials\.

If self have enough capacity, MulNaive will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulTol
```jule
fn MulTol(mut *self, &x: *Dense, &y: *Dense, tol: f64)
```
Sets self to product x\*y\.

Unlike Mul, this function takes custom tolerance and uses it for FFT\. If the naive algorithm is selected, tolerance is not used\.

The algorithm selects between naive multiplication and FFT depending on polynomial size\.

If self have enough capacity, MulTol will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulFFT
```jule
fn MulFFT(mut *self, &x: *Dense, &y: *Dense, tol: f64)
```
Sets self to product x\*y\.

Like MulTol but forces FFT and never uses the naive algorithm\. Provides faster computations for large polynomials, but may introduce more floating\-point rounding errors\.

If self have enough capacity, MulFFT will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivMod
```jule
fn DivMod(mut *self, &x: *Dense, &y: *Dense, mut &rem: *Dense)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\. Panics for divide by zero\.

It uses naive division for small inputs and FFT division for larger inputs\. FFT division may have larger floating\-point rounding errors\.

If self and rem have enough capacity, DivMod will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivModNaive
```jule
fn DivModNaive(mut *self, &x: *Dense, &y: *Dense, mut &rem: *Dense, tol: f64)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\.

Like DivMod but forces naive polynomial division and never uses FFT\.

If self and rem have enough capacity, DivModNaive will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivModFFT
```jule
fn DivModFFT(mut *self, &x: *Dense, &y: *Dense, mut &rem: *Dense, tol: f64)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\. Panics for divide by zero\.

Like DivMod but forces FFT division and never uses naive division\. Provides faster computations for large polynomials, but may introduce more floating\-point rounding errors, especially in the remainder\.

If self and rem have enough capacity, DivModFFT will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Deriv
```jule
#disable boundary
fn Deriv(mut *self, &x: *Dense)
```
Sets self to the first derivative of polynomial x\.

```
If x = ∑ᵢ [ aᵢ * xⁱ ], then self = ∑ᵢ [ (i*aᵢ)·xⁱ⁻¹ ] for i ≥ 1.
```
Constant terms \(exp = 0\) are omitted\.

If self have enough capacity, Deriv will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Integral
```jule
#disable boundary
fn Integral(mut *self, &x: *Dense, C: f64)
```
Sets self to the indefinite integral of polynomial x with constant term C\. That is, integrates each term and appends a constant term\.

If self have enough capacity, Integral will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\. \#disable boundary

### Eval
```jule
#disable boundary
fn Eval(*self, x: f64): f64
```
Evaluates the polynomial at a given x\.

### Pow
```jule
fn Pow(mut *self, &x: *Dense, mut n: int)
```
Sets self to product x^n\.

Condition n &gt;= 0 must be true\.

If self have enough capacity, Pow will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

The implementation uses exponentiation by squaring, equivalent to NumPy&#39;s polynomial power operation\.

### Normalize
```jule
#disable boundary
fn Normalize(mut *self, &x: *Dense, tol: f64)
```
Sets self to a rescaled polynomial x, so that its leading coefficient is 1\. If the polynomial is zero or its leading coefficient is very small, output length is zero\.

If self have enough capacity, Normalize will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\. \#disable boundary

### InterpolateLinear
```jule
#disable boundary
fn InterpolateLinear(mut *self, x0: f64, y0: f64, x1: f64, y1: f64)
```
Sets self to the unique linear polynomial that passes through points \(x0, y0\) and \(x1, y1\)\.

The resulting coefficients are stored in ascending order: self\[0\] = constant term, self\[1\] = x coefficient\.

If self have enough capacity, InterpolateLinear will use it to avoid making allocation\.

### AppendFormat
```jule
fn AppendFormat(*self, mut buf: []byte): []byte
```
Appends a human\-readable string representation of the polynomial to buf and returns\.

### String
```jule
fn String(*self): string
```
Returns a human\-readable string representation of the polynomial\.

## Term
```jule
struct Term {
	Coef: f64
	Exp:  int
}
```
Represents a single term \(monomial\) of a polynomial\. It has a coefficient and an exponent \(degree\)\.

Mathematically, a term is expressed as:<br>
```
coef * x^exp, where:
	- coef ∈ ℝ (coefficient, a real number)
	- exp ∈ ℕ₀ (non-negative integer exponent)
```
For example:<br>
```
the term 3x² is represented as Term{Coef: 3, Exp: 2}.
the term x is represented as Term{Coef: 1, Exp: 1}.
the term 2x is represented as Term{Coef: 2, Exp: 1}.
the term 1 is represented as Term{Coef: 1, Exp: 0}
```


## Sparse
```jule
type Sparse: []Term
```
Represents a polynomial as a slice of Terms\.

A polynomial P\(x\) is a finite sum of terms:<br>
```
P(x) = Σᵢ [ Coefᵢ * x^Expᵢ ]
```
where each Term is stored as an element of the Terms slice\.

Terms are expected to be stored in descending order of exponent \(Exp\), i\.e\., Terms\[0\]\.Exp &gt; Terms\[1\]\.Exp &gt; \.\.\. &gt; Terms\[n\-1\]\.Exp, which simplifies polynomial operations like addition and multiplication\. Any corruption in this order is undefined behavior\.

Capacity of underlying slices is never changed for values; i\.e\. that there are no 3\-operand slice expressions\. Any corruption of this rule is undefined behavior\.

### Set
```jule
#disable boundary
fn Set(mut *self, terms: []Term, tol: f64)
```
Sets self to the given terms\.

Terms may be in any order\. Terms with the same exponent are merged, zero coefficients within tolerance are removed, and the result is sorted by decreasing exponent\. Final polynomial will be simplified\.

If self has enough capacity, Set will reuse it to avoid allocation\. If terms is empty, self will be zero\-length but keeps its capacity\.

### LeadingCoef
```jule
fn LeadingCoef(*self): f64
```
Returns the leading coefficient of the polynomial\. Panics if polynomial is zero\.

### Zero
```jule
fn Zero(*self, tol: f64): bool
```
Reports whether polynomial is zero within tolerance\.

### Degree
```jule
fn Degree(*self): int
```
Returns the degree of the polynomial \(highest exponent\)\. Returns \-1 for the zero polynomial\.

### Negate
```jule
#disable boundary
fn Negate(mut *self, &x: *Sparse)
```
Sets self to negated coefficients of the polynomial x\. For example, \(3x^2 \- 4x \+ 1\) becomes \(\-3x^2 \+ 4x \- 1\)\.

If self have enough capacity, Negate will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Copy
```jule
fn Copy(mut *self, &x: *Sparse)
```
Copies polynomial x to self\.

If self have enough capacity, Negate will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Simplify
```jule
fn Simplify(mut *self, &p: *Sparse, tol: f64)
```
Sets self to simplified form of the polynomial p\. IT merges like terms and removes zero coefficients with tolerance\.

Result is sorted by decreasing exponent\. If the Sparse manually modified, this function may help to follow internal polynomial representation rules as described in Sparse type\.

If self have enough capacity, Simplify will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Add
```jule
#disable boundary
fn Add(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to sum x\+y\.

If self have enough capacity, Add will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Sub
```jule
#disable boundary
fn Sub(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to difference x\-y\.

If self have enough capacity, Sub will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Scale
```jule
#disable boundary
fn Scale(mut *self, &x: *Sparse, k: f64, tol: f64)
```
Sets self to scaled coefficients of x by scalar k\. For example, if k = 2, \(3x^2 \- x\) becomes \(6x^2 \- 2x\)\.

If self have enough capacity, Scale will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Mul
```jule
#disable boundary
fn Mul(mut *self, &x: *Sparse, &y: *Sparse)
```
Sets self to product x\*y\.

It is equals to MulTol\(x, y, tol\), but determines tolerance dynamically\. Dynamic tolerance value might not be suitable for some cases\. Use MulTol with custom tolerance when needed, especially for precise and small coefficients like 1e\-14\. However, small coefficients might be removed due to rounding errors during computation with custom tolerance\.

For minimum rounding\-errors, use MulNaive to force native algorithms\. Naive algorithm is slower than FFT, but it is more accurate\.

If self have enough capacity, Mul will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulNaive
```jule
#disable boundary
fn MulNaive(mut *self, &x: *Sparse, &y: *Sparse)
```
Sets self to product x\*y\.

Like Mul but forces to naive algorithm and never uses FFT\. Provides more accurate results, but slower for large polynomials\.

If self have enough capacity, MulNaive will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulTol
```jule
fn MulTol(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to product x\*y\.

Unlike Mul, this function takes custom tolerance and it uses for FFT\. If FFT algorithm will not be used, tolerance will not be used\.

Algorithm will select naive algorithm of FFT to compute, which one is efficient for the case\.

If self have enough capacity, MulTol will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### MulFFT
```jule
fn MulFFT(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to product x\*y\.

Like MulTol but forces to FFT and never uses naive algorithm\. Provides faster computations for large polynomaisl, but less accurate\.

If self have enough capacity, MulFFT will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivMod
```jule
fn DivMod(mut *self, &x: *Sparse, &y: *Sparse, mut &rem: *Sparse)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\. Panics for divide by zero\.

It uses naive division for small inputs, FFT division for larger inputs\. When FFT division used, accuracy decreased due to floating\-point rounding\. Especiall remainder is less accurate compared to naive division\.

For minimum rounding\-errors, use DivModNaive to force native division\. Naive algorithm is slower than FFT, but it is more accurate\.

If self and rem have enough capacity, DivMod will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivModNaive
```jule
fn DivModNaive(mut *self, &x: *Sparse, &y: *Sparse, mut &rem: *Sparse)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\. Panics for divide by zero\.

Like DivMod but forces to naive algorithm and never uses FFT\. Provides more accurate results, but slower for large polynomials\.

If self and rem have enough capacity, DivMod will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### DivModFFT
```jule
fn DivModFFT(mut *self, &x: *Sparse, &y: *Sparse, mut &rem: *Sparse)
```
Sets self to quotient x/y, sets rem to remainder x/y if it is not nil\. Panics for divide by zero\.

Like DivMod but forces FFT division and never uses naive division\. Provides faster computations for large polynomials, but may introduce more floating\-point rounding errors, especially in the remainder\.

If self and rem have enough capacity, DivModFFT will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Deriv
```jule
#disable boundary
fn Deriv(mut *self, &x: *Sparse)
```
Sets self to the first derivative of polynomial x\.

```
If x = ∑ᵢ [ aᵢ * xⁱ ], then self = ∑ᵢ [ (i*aᵢ)·xⁱ⁻¹ ] for i ≥ 1.
```
Constant terms \(exp = 0\) are omitted\.

If self have enough capacity, Deriv will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Integral
```jule
#disable boundary
fn Integral(mut *self, &x: *Sparse, C: f64)
```
Sets self to the indefinite integral of polynomial x with constant term C\. That is, integrates each term and appends a constant term\.

If self have enough capacity, Integral will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Eval
```jule
#disable boundary
fn Eval(*self, x: f64): f64
```
Evaluates the polynomial at a given x\.

### GCD
```jule
fn GCD(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to the greatest common divisor of two polynomials x and y\. Leading coefficient is normalized to 1 \(if not zero\)\.

If self have enough capacity, GCD will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### LCM
```jule
fn LCM(mut *self, &x: *Sparse, &y: *Sparse, tol: f64)
```
Sets self to the least common multiple of two polynomials x and y\. Leading coefficient is normalized to 1 \(if not zero\)\.

If self have enough capacity, LCM will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Pow
```jule
#disable boundary
fn Pow(mut *self, &x: *Sparse, mut n: int)
```
Sets self to product x^n\. Condition n &gt;= 0 must be true\.

If self have enough capacity, Pow will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Normalize
```jule
#disable boundary
fn Normalize(mut *self, &x: *Sparse, tol: f64)
```
Sets self to rescaled polynomial x, so that its leading coefficient is 1\. If the polynomial is zero or leading coefficient is very small, output length is zero\.

If self have enough capacity, Normalize will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### InterpolateLinear
```jule
#disable boundary
fn InterpolateLinear(mut *self, x0: f64, y0: f64, x1: f64, y1: f64)
```
Sets self to the unique linear polynomial that passes through points \(x0, y0\) and \(x1, y1\)\.

If self have enough capacity, InterpolateLinear will use it to avoid making allocation\.

### InterpolateLagrange
```jule
#disable boundary
fn InterpolateLagrange(mut *self, xs: []f64, ys: []f64, tol: f64)
```
Sets self to the unique degree\-\(n\-1\) polynomial that passes through the given points using the Lagrange interpolation formula\. Panics if input lengths differ or have duplicate x values\.

If self have enough capacity, InterpolateLagrance will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### AppendFormat
```jule
fn AppendFormat(*self, mut buf: []byte): []byte
```
Appends a human\-readable string representation of the polynomial to buf and returns\.

### String
```jule
fn String(*self): string
```
Returns a human\-readable string representation of the polynomial\.

:::