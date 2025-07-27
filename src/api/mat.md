# julenum/mat

Package for matrices.

## Index

[fn Empty\[T: numeric\]\(\): Matrix\[T\]](#empty)\
[fn New\[T: numeric\]\(m: int, n: int\): Matrix\[T\]](#new)\
[fn NewFrom\[T: numeric\]\(values: \[\]\[\]T\): Matrix\[T\]](#newfrom)\
[struct Matrix\[T: numeric\]](#matrix)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dims\(\*self\): \(m: int, n: int\)](#dims)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Size\(\*self\): int](#size)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Zero\(\*self\): bool](#zero)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Square\(\*self\): bool](#square)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scalar\(\*self, c: T\): bool](#scalar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Identity\(\*self\): bool](#identity)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Diagonal\(\*self\): bool](#diagonal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Get\(\*self, i: int, j: int\): T](#get)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Set\(mut \*self, i: int, j: int, value: T\)](#set)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Equal\(\*self, &amp;z: \*Matrix\[T\]\): bool](#equal)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fill\(mut \*self, &amp;z: \*Matrix\[T\], k: T\)](#fill)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Copy\(mut \*self, &amp;z: \*Matrix\[T\]\)](#copy)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Resize\(mut \*self, &amp;z: \*Matrix\[T\], m: int, n: int\)](#resize)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Trace\(\*self\): T](#trace)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Transpose\(mut \*self, &amp;z: \*Matrix\[T\]\)](#transpose)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AddScalar\(mut \*self, &amp;z: \*Matrix\[T\], k: T\)](#addscalar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn SubScalar\(mut \*self, &amp;z: \*Matrix\[T\], k: T\)](#subscalar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MulScalar\(mut \*self, &amp;z: \*Matrix\[T\], k: T\)](#mulscalar)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Matrix\[T\], &amp;y: \*Matrix\[T\]\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Matrix\[T\], &amp;y: \*Matrix\[T\]\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mul\(mut \*self, &amp;x: \*Matrix\[T\], &amp;y: \*Matrix\[T\]\)](#mul)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Det\(\*self\): T](#det)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Slogdet\(\*self\): \(sign: T, logdet: f64\)](#slogdet)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Inv\(mut \*self, &amp;a: \*Matrix\[T\]\)](#inv)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Format\(\*self, wsn: int\): str](#format)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AppendFormat\(\*self, mut buf: \[\]byte, wsn: int\): \[\]byte](#appendformat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Str\(\*self\): str](#str)



## Empty
```jule
fn Empty[T: numeric](): Matrix[T]
```
Returns new empty \(0×0\) Matrix for type T\.

## New
```jule
fn New[T: numeric](m: int, n: int): Matrix[T]
```
Returns new \(M×N\) zero Matrix for type T\.

Constraints:<br>
```
m >= 0
n >= 0
```


## NewFrom
```jule
#disable boundary
fn NewFrom[T: numeric](values: [][]T): Matrix[T]
```
Returns new \(M×N\) Matrix for type T\. Uses len\(values\) for m, len\(values\[1\]\) for n\. Panics if all rows are not have same amount of values\.

Special cases are:<br>
```
NewFrom(values) = (0×0) Matrix, if len(values) == 0
NewFrom(values) = (0×0) Matrix, if len(values) == 1 && len(values[1]) == 0
```
Example Use:

```
mat::NewFrom([
	[1, 2, 4],
	[3, 4, 5],
])

Equals to:
	A = ⎡1 2 4⎤
	    ⎣3 4 5⎦(2×3)
```


## Matrix
```jule
struct Matrix[T: numeric] {
	// NOTE: contains filtered hidden or unexported fields
}
```
A matrix for type T\. Uses internal mutable slice to store data\. Matrix computations may use available capacity of the underlying slice to avoid making new allocation\. So shared data needs extra attention\. Any mutable operation may be reflected to shared common data\. If you need to share same Matrix instance, use smart pointers\. If you need to have guaranteed independent copy, use Copy with empty Matrix\.

### Dims
```jule
fn Dims(*self): (m: int, n: int)
```
Returns dimensions of the Matrix \(M×N\)\.

### Size
```jule
fn Size(*self): int
```
Returns total element count of matrix \(M×N\)\.

### Zero
```jule
fn Zero(*self): bool
```
Reports whether the all values of Matrix are zero\.

Special cases are:<br>
```
Zero() = true, if Dims() == (0, 0)
```


### Square
```jule
fn Square(*self): bool
```
Reports whether the Matrix is a square matrix \(M == N\)\.

### Scalar
```jule
#disable boundary
fn Scalar(*self, c: T): bool
```
Reports whether the matrice \(M×N\) is scalar matrice of c\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\.

### Identity
```jule
fn Identity(*self): bool
```
Reports whether the matrice \(M×N\) is an identity matrice\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\.

### Diagonal
```jule
fn Diagonal(*self): bool
```
Reports whether the matrice \(M×N\) is a diagonal matrice\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\.

### Get
```jule
fn Get(*self, i: int, j: int): T
```
Returns value of the specified \(i×j\) position\. Position index starts from zero for column and row\.

Implementation will not check for boundaries, invalid position may cause panic\. To provide fast computation, it will not check whether the \(i×j\) is valid \(M×N\)\.

### Set
```jule
fn Set(mut *self, i: int, j: int, value: T)
```
Sets value of the specified \(i×j\) position\. Position index starts from zero for column and row\.

Implementation will not check for boundaries, invalid position may cause panic\. To provide fast computation, it will not check whether the \(i×j\) is valid \(M×N\)\.

### Equal
```jule
#disable boundary
fn Equal(*self, &z: *Matrix[T]): bool
```
Reports whether self and z matrices are equal\.

### Fill
```jule
#disable boundary
fn Fill(mut *self, &z: *Matrix[T], k: T)
```
Sets self to z, filled with k\. If self have enough capacity, Fill will use it to avoid making allocation\.

### Copy
```jule
fn Copy(mut *self, &z: *Matrix[T])
```
Copies z to self\.

If self have enough capacity, Copy will use it to avoid making allocation\.

### Resize
```jule
fn Resize(mut *self, &z: *Matrix[T], m: int, n: int)
```
Copies matrice z to self with custom \(M×N\) size\. If new size is larger, it will add padding with zeros\. If new size is smaller, it will cut rows and columns\.

If self have enough capacity, Resize will use it to avoid making allocation\. If M == 0 or N == 0, self will be \(0×0\)\. But keeps internal allocation\.

### Trace
```jule
#disable boundary
fn Trace(*self): T
```
Returns trace of matrix\. Panics if matrix is not a square matrix\.

Special cases are:<br>
```
Trace() = 0, for (0×0) matrices
```


### Transpose
```jule
#disable boundary
fn Transpose(mut *self, &z: *Matrix[T])
```
Sets self to the transpose of the matrix z\. If self have enough capacity, Transpose will use it to avoid making allocation\. If z is a \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### AddScalar
```jule
#disable boundary
fn AddScalar(mut *self, &z: *Matrix[T], k: T)
```
Sets self to the sum z\+k\. If self have enough capacity, AddScalar will use it to avoid making allocation\. If z is a \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### SubScalar
```jule
#disable boundary
fn SubScalar(mut *self, &z: *Matrix[T], k: T)
```
Sets self to the difference z\-k\. If self have enough capacity, SubScalar will use it to avoid making allocation\. If z is a \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### MulScalar
```jule
#disable boundary
fn MulScalar(mut *self, &z: *Matrix[T], k: T)
```
Sets self to the product z\*k\. If self have enough capacity, MulScalar will use it to avoid making allocation\. If z is a \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### Add
```jule
#disable boundary
fn Add(mut *self, &x: *Matrix[T], &y: *Matrix[T])
```
Sets self to the sum x\+y\. If self have enough capacity, Add will use it to avoid making allocation\. If matrices are \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### Sub
```jule
#disable boundary
fn Sub(mut *self, &x: *Matrix[T], &y: *Matrix[T])
```
Sets self to the difference x\-y\. If self have enough capacity, Sub will use it to avoid making allocation\. If matrices are \(0×0\) matrix, self will be \(0×0\)\. But keeps internal allocation\.

### Mul
```jule
#disable boundary
fn Mul(mut *self, &x: *Matrix[T], &y: *Matrix[T])
```
Sets self to the product x\*y\. If self have enough capacity, Mul will use it to avoid making allocation\.

### Det
```jule
fn Det(*self): T
```
Computes the determinant of the matrix\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\.

For integer and floating\-point types, computations are performed using 64\-bit floating\-point precision\. For complex types, computations use 128\-bit complex precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use an f64 or cmplx128 matrix\.

### Slogdet
```jule
#disable boundary
fn Slogdet(*self): (sign: T, logdet: f64)
```
Computes the sign and natural logarithm of the absolute value of the determinant of the matrix\. Returns \(sign, logdet\)\. If the matrix is singular, returns \(0, \-Inf\)\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\.

For integer and floating\-point types, computations are performed using 64\-bit floating\-point precision\. For complex types, computations use 128\-bit complex precision\. The result is returned as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use an f64 or cmplx128 matrix\.

NOTICE \(floating\-point types\)<br>
```
Let (sign, logdet) = Slogdet()
- Mathematically: Det() = sign * exp(logdet)
- In practice:    Det() ≈ sign * exp(logdet)
                  due to floating-point rounding.
```
NOTICE \(complex types\)<br>
```
Let (sign, logdet) = Slogdet()
- Mathematically: Det() = cmplx(real(sign)*exp(logdet), imag(sign)*exp(logdet))
- In practive:    Det() ≈ cmplx(real(sign)*exp(logdet), imag(sign)*exp(logdet))
                  due to floating-point rounding.
```


### Inv
```jule
fn Inv(mut *self, &a: *Matrix[T])
```
Sets self to A⁻¹, inverse of the matrix a\. This function only supports square matrices \(M == N &amp;&amp; N &gt; 0\)\. If self have enough capacity, Mul will use it to avoid making allocation\. It panics if matrix a is singular\.

For integer and floating\-point types, computations are performed using 64\-bit floating\-point precision\. For complex types, computations use 128\-bit complex precision\. The result is handled as type T, which may cause rounding errors or loss of precision\. To preserve exact results, use an f64 or cmplx128 matrix\.

### Format
```jule
fn Format(*self, wsn: int): str
```
Returns string form of the matrix\. wsn represents number of whitespaces between matrix elements\. wsn will be considired as zero if wsn &lt; 1\. Default wsn value is 1\.

### AppendFormat
```jule
fn AppendFormat(*self, mut buf: []byte, wsn: int): []byte
```
Appends string form of the matrix to buf and returns\. wsn represents number of whitespaces between matrix elements\. wsn will be considired as zero if wsn &lt; 1\. Default wsn value is 1\.

### Str
```jule
fn Str(*self): str
```
Returns string form of the matrix\.