# julenum/nums

General package for numerical collection handling.

::: v-pre

## Index

[fn Equal\[S: \~\[\]T, T: numeric\]\(a: S, b: S\): bool](#equal)\
[fn EqualApprox\[S: \~\[\]T, T: \~f64 \| \~cmplx128\]\(a: S, b: S, tol: f64\): bool](#equalapprox)\
[fn Sum\[S: \~\[\]T, T: numeric\]\(x: S\): T](#sum)\
[fn Add\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, y: S\): S](#add)\
[fn Sub\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, y: S\): S](#sub)\
[fn Mul\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, y: S\): S](#mul)\
[fn Div\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, y: S\): S](#div)\
[fn AddScalar\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, k: T\): S](#addscalar)\
[fn SubScalar\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, k: T\): S](#subscalar)\
[fn MulScalar\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, k: T\): S](#mulscalar)\
[fn DivScalar\[S: \~\[\]T, T: numeric\]\(mut z: S, x: S, k: T\): S](#divscalar)



## Equal
```jule
#disable boundary
fn Equal[S: ~[]T, T: numeric](a: S, b: S): bool
```
Returns true when the slices have equal lengths and all elements are numerically identical\.

## EqualApprox
```jule
#disable boundary
fn EqualApprox[S: ~[]T, T: ~f64 | ~cmplx128](a: S, b: S, tol: f64): bool
```
Returns true when the slices have equal lengths and all element pairs have an absolute tolerance less than tol or a relative tolerance less than tol\.

## Sum
```jule
#disable boundary
fn Sum[S: ~[]T, T: numeric](x: S): T
```
Returns the sum of the elements of the slice\.

Formula:<br>
```
sum = Σᵢ [ xᵢ ]
```


## Add
```jule
fn Add[S: ~[]T, T: numeric](mut z: S, x: S, y: S): S
```
Sets z to the sum x\+y and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ+yᵢ
```


## Sub
```jule
fn Sub[S: ~[]T, T: numeric](mut z: S, x: S, y: S): S
```
Sets z to the difference x\-y and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ-yᵢ
```


## Mul
```jule
fn Mul[S: ~[]T, T: numeric](mut z: S, x: S, y: S): S
```
Sets z to the product x\*y and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ*yᵢ
```


## Div
```jule
fn Div[S: ~[]T, T: numeric](mut z: S, x: S, y: S): S
```
Sets z to the product x/y and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ/yᵢ
```


## AddScalar
```jule
fn AddScalar[S: ~[]T, T: numeric](mut z: S, x: S, k: T): S
```
Sets z to the sum x\+k and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ+k
```


## SubScalar
```jule
fn SubScalar[S: ~[]T, T: numeric](mut z: S, x: S, k: T): S
```
Sets z to the difference x\-k and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ-k
```


## MulScalar
```jule
fn MulScalar[S: ~[]T, T: numeric](mut z: S, x: S, k: T): S
```
Sets z to the product x\*k and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ*k
```


## DivScalar
```jule
fn DivScalar[S: ~[]T, T: numeric](mut z: S, x: S, k: T): S
```
Sets z to the division x/k and returning it\. All slices must have same length\.

Formula:<br>
```
zᵢ = xᵢ/k
```


:::