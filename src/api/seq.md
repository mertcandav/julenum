# julenum/seq

Package for sequences.

## Index

[fn Catalan\(\): Seq](#catalan)\
[fn Cube\(\): Seq](#cube)\
[fn Factorial\(\): Seq](#factorial)\
[fn Fibonacci\(\): Seq](#fibonacci)\
[fn PowerOfTwo\(\): Seq](#poweroftwo)\
[fn Square\(\): Seq](#square)\
[fn Triangular\(\): Seq](#triangular)\
[trait Seq](#seq)



## Catalan
```jule
fn Catalan(): Seq
```
Returns a sequence representing catalan numbers from C₀, then C₁, C₂, and so on\.

## Cube
```jule
fn Cube(): Seq
```
Returns a sequence representing cube numbers from 1³, then 2³, 3³, and so on\.

## Factorial
```jule
fn Factorial(): Seq
```
Returns a sequence representing factorials from 0\!, then 1\!, 2\!, and so on\.

## Fibonacci
```jule
fn Fibonacci(): Seq
```
Returns a sequence representing fibonacci numbers from 0, then 1, 1, and so on\.

## PowerOfTwo
```jule
fn PowerOfTwo(): Seq
```
Returns a sequence representing powers of two starting from 2⁰ = 1, then 2¹ = 2, 2² = 4, and so on\.

## Square
```jule
fn Square(): Seq
```
Returns a sequence representing square numbers from 1², then 2², 3², and so on\.

## Triangular
```jule
fn Triangular(): Seq
```
Returns a sequence representing triangular numbers from 1, then 3, 6, 10, and so on\.

## Seq
```jule
trait Seq {
	// Resets sequence.
	fn Reset(*self)

	// Returns the next value of sequence in big integer.
	// The result may be mutable reference to the internal detail.
	// Any mutation on the result may corrupt the internal computation of Seq.
	// Get immutable copy of the result in need.
	fn Next(*self): big::Int
}
```
Common trait for sequences\.