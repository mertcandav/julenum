# julenum/vec

Package for vectors.

## Index

[struct Vector3](#vector3)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Vector3, &amp;y: \*Vector3\)](#add)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Vector3, &amp;y: \*Vector3\)](#sub)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dot\(\*self, &amp;y: \*Vector3\): f64](#dot)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;x: \*Vector3, k: f64\)](#scale)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cross\(mut \*self, &amp;x: \*Vector3, &amp;y: \*Vector3\)](#cross)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Norm\(\*self\): f64](#norm)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;x: \*Vector3\)](#normalize)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AngleBetween\(\*self, &amp;y: \*Vector3\): f64](#anglebetween)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn RotateQuat\(mut \*self, &amp;x: \*Vector3, mut q: quat::Quat\)](#rotatequat)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Proj\(mut \*self, &amp;x: \*Vector3, &amp;y: \*Vector3\)](#proj)\
[struct Vector2](#vector2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Vector2, &amp;y: \*Vector2\)](#add-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Vector2, &amp;y: \*Vector2\)](#sub-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dot\(\*self, &amp;y: \*Vector2\): f64](#dot-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;x: \*Vector2, k: f64\)](#scale-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Cross\(\*self, &amp;x: \*Vector2\): f64](#cross-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Norm\(\*self\): f64](#norm-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;x: \*Vector2\)](#normalize-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AngleBetween\(\*self, &amp;y: \*Vector2\): f64](#anglebetween-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rotate\(mut \*self, &amp;x: \*Vector2, theta: f64\)](#rotate)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Proj\(mut \*self, &amp;x: \*Vector2, &amp;y: \*Vector2\)](#proj-1)\
[type Vector\[T](#vector)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Add\(mut \*self, &amp;x: \*Vector\[T\], &amp;y: \*Vector\[T\]\)](#add-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sub\(mut \*self, &amp;x: \*Vector\[T\], &amp;y: \*Vector\[T\]\)](#sub-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Dot\(\*self, &amp;y: \*Vector\[T\]\): T](#dot-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Scale\(mut \*self, &amp;x: \*Vector\[T\], k: f64\)](#scale-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Norm\(\*self\): f64](#norm-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Normalize\(mut \*self, &amp;x: \*Vector\[T\]\)](#normalize-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn AngleBetween\(\*self, &amp;y: \*Vector\[T\]\): f64](#anglebetween-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Proj\(mut \*self, &amp;x: \*Vector\[T\], &amp;y: \*Vector\[T\]\)](#proj-2)



## Vector3
```jule
struct Vector3 {
	X: f64
	Y: f64
	Z: f64
}
```
3D vector\.

### Add
```jule
fn Add(mut *self, &x: *Vector3, &y: *Vector3)
```
Sets self to the sum x\+y\.

### Sub
```jule
fn Sub(mut *self, &x: *Vector3, &y: *Vector3)
```
Sets self to the difference x\-y\.

### Dot
```jule
fn Dot(*self, &y: *Vector3): f64
```
Returns the dot product self\*y\.

### Scale
```jule
fn Scale(mut *self, &x: *Vector3, k: f64)
```
Sets self to to x scaled by k\.

### Cross
```jule
fn Cross(mut *self, &x: *Vector3, &y: *Vector3)
```
Sets self to the cross product x\*y of two vectors \(3D cross product\)\.

### Norm
```jule
fn Norm(*self): f64
```
Returns norm \(length\) of vector\.

### Normalize
```jule
fn Normalize(mut *self, &x: *Vector3)
```
Sets self to the unit vector \(vector with norm 1\) in the same direction as x\. If the vector x has zero norm, it returns the zero vector \(0, 0, 0\) to avoid division by zero\.

### AngleBetween
```jule
fn AngleBetween(*self, &y: *Vector3): f64
```
Returns the angle in radians between self and y vectors\.

### RotateQuat
```jule
fn RotateQuat(mut *self, &x: *Vector3, mut q: quat::Quat)
```
Sets self to the x vector rotated by quaternion q\.

### Proj
```jule
fn Proj(mut *self, &x: *Vector3, &y: *Vector3)
```
Sets self to projection of vector x onto y\. If the vector y has zero norm, it returns the zero vector \(0, 0, 0\) to avoid division by zero\.

## Vector2
```jule
struct Vector2 {
	X: f64
	Y: f64
}
```
2D vector\.

### Add
```jule
fn Add(mut *self, &x: *Vector2, &y: *Vector2)
```
Sets self to the sum x\+y\.

### Sub
```jule
fn Sub(mut *self, &x: *Vector2, &y: *Vector2)
```
Sets self to the difference x\-y\.

### Dot
```jule
fn Dot(*self, &y: *Vector2): f64
```
Returns the dot product self\*y\.

### Scale
```jule
fn Scale(mut *self, &x: *Vector2, k: f64)
```
Sets self to to x scaled by k\.

### Cross
```jule
fn Cross(*self, &x: *Vector2): f64
```
Returns the scalar cross product of two vectors \(2D cross product\)\.

### Norm
```jule
fn Norm(*self): f64
```
Returns norm \(length\) of vector\.

### Normalize
```jule
fn Normalize(mut *self, &x: *Vector2)
```
Sets self to the unit vector \(vector with norm 1\) in the same direction as x\. If the vector x has zero norm, it returns the zero vector \(0, 0\) to avoid division by zero\.

### AngleBetween
```jule
fn AngleBetween(*self, &y: *Vector2): f64
```
Returns the angle in radians between self and y vectors\.

### Rotate
```jule
fn Rotate(mut *self, &x: *Vector2, theta: f64)
```
Sets self to the x vector rotated by theta radians\.

### Proj
```jule
fn Proj(mut *self, &x: *Vector2, &y: *Vector2)
```
Sets self to projection of vector x onto y\. If the vector y has zero norm, it returns the zero vector \(0, 0\) to avoid division by zero\.

## Vector
```jule
type Vector[T: integer | float]: []T
```
General vector type for type T\.

### Add
```jule
#disable boundary
fn Add(mut *self, &x: *Vector[T], &y: *Vector[T])
```
Sets self to the sum x\+y\. x any y must have same length\.

If self have enough capacity, Add will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Sub
```jule
#disable boundary
fn Sub(mut *self, &x: *Vector[T], &y: *Vector[T])
```
Sets self to the difference x\-y\. x any y must have same length\.

If self have enough capacity, Sub will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Dot
```jule
fn Dot(*self, &y: *Vector[T]): T
```
Returns the dot product self\*y\. self any y must have same length\. Returns zero if length is zero\.

### Scale
```jule
#disable boundary
fn Scale(mut *self, &x: *Vector[T], k: f64)
```
Sets self to to x scaled by k\.

If self have enough capacity, Normalize will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### Norm
```jule
fn Norm(*self): f64
```
Returns norm \(length\) of vector\.

### Normalize
```jule
#disable boundary
fn Normalize(mut *self, &x: *Vector[T])
```
Sets self to the unit vector \(vector with norm 1\) in the same direction as x\. If the vector x has zero norm, it returns the zero vector \(x₁=0, x₂=0, \.\.\., xₙ=0\) to avoid division by zero\.

If self have enough capacity, Normalize will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.

### AngleBetween
```jule
fn AngleBetween(*self, &y: *Vector[T]): f64
```
Returns the angle in radians between self and y vectors\. self any y must have same length\.

### Proj
```jule
#disable boundary
fn Proj(mut *self, &x: *Vector[T], &y: *Vector[T])
```
Sets self to projection of vector x onto y\. x any y must have same length\. If the vector y has zero norm, it returns the zero vector \(x₁=0, x₂=0, \.\.\., xₙ=0\) to avoid division by zero\.

If self have enough capacity, Normalize will use it to avoid making allocation\. If length is zero, self will be zero\-length\. But keeps internal allocation\.