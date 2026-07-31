# julenum/dsp/fourier

Package for Discrete Fourier Transform (DFT).

::: v-pre

## Index

[fn CoefficientsRadix2\(mut seq: \[\]cmplx128, invert: bool\): \[\]cmplx128](#coefficientsradix2)\
[fn SequenceRadix2\(mut coeff: \[\]cmplx128\): \[\]cmplx128](#sequenceradix2)\
[fn PadRadix2\(mut x: \[\]cmplx128\): \[\]cmplx128](#padradix2)\
[fn TrimRadix2\(mut x: \[\]cmplx128\): \(even: \[\]cmplx128, remains: \[\]cmplx128\)](#trimradix2)\
[struct FFT](#fft)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(n: int\): &amp;FFT](#new)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, n: int\)](#reset)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Coefficients\(\*self, mut dst: \[\]cmplx128, seq: \[\]cmplx128\): \[\]cmplx128](#coefficients)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sequence\(\*self, mut dst: \[\]cmplx128, coeff: \[\]cmplx128\): \[\]cmplx128](#sequence)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Freq\(\*self, i: int\): f64](#freq)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ShiftIdx\(\*self, i: int\): int](#shiftidx)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn UnshiftIdx\(\*self, i: int\): int](#unshiftidx)\
[struct RFFT](#rfft)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn New\(n: int\): &amp;RFFT](#new-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Len\(\*self\): int](#len-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Reset\(mut \*self, n: int\)](#reset-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Coefficients\(\*self, mut dst: \[\]cmplx128, seq: \[\]f64\): \[\]cmplx128](#coefficients-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Sequence\(\*self, mut dst: \[\]f64, coeff: \[\]cmplx128\): \[\]f64](#sequence-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Freq\(\*self, i: int\): f64](#freq-1)



## CoefficientsRadix2
```jule
fn CoefficientsRadix2(mut seq: []cmplx128, invert: bool): []cmplx128
```
Computes the Fourier coefficients of the input sequence, converting the time series in seq into the frequency spectrum, in place and returning it\. This transform is unnormalized; a call to CoefficientsRadix2 followed by a call of SequenceRadix2 will multiply the input sequence by the length of the sequence\.

It does not allocate, requiring that FFT twiddle factors be calculated lazily\. For performance reasons, this is done by successive multiplication, so numerical accuracies can accumulate for large inputs\. If accuracy is needed, the RFFT or FFT types should be used\.

If the length of seq is not an integer power of 2, it will panic\.

## SequenceRadix2
```jule
#disable boundary
fn SequenceRadix2(mut coeff: []cmplx128): []cmplx128
```
Computes the real periodic sequence from the Fourier coefficients, converting the frequency spectrum in coeff into a time series, in place and returning it\. This transform is unnormalized; a call to CoefficientsRadix2 followed by a call of SequenceRadix2 will multiply the input sequence by the length of the sequence\.

It does not allocate, requiring that FFT twiddle factors be calculated lazily\. For performance reasons, this is done by successive multiplication, so numerical accuracies can accumulate for large inputs\. If accuracy is needed, the RFFT or FFT types should be used\.

If the length of coeff is not an integer power of 2, it will panic\.

## PadRadix2
```jule
fn PadRadix2(mut x: []cmplx128): []cmplx128
```
Returns the values in x in a slice that is an integer power of 2 long\. If x already has an integer power of 2 length it is returned unaltered\.

## TrimRadix2
```jule
#disable boundary
fn TrimRadix2(mut x: []cmplx128): (even: []cmplx128, remains: []cmplx128)
```
Returns the largest slice of x that is has an integer power of 2 length, and a slice holding the remaining elements\.

## FFT
```jule
struct FFT {
	// NOTE: contains filtered hidden or unexported fields
}
```
Implements Fast Fourier Transform and its inverse for complex sequences\.

### New
```jule
fn New(n: int): &FFT
```
Returns an FFT initialized for work on sequences of length n\.

### Len
```jule
fn Len(*self): int
```
Returns the length of the acceptable input\.

### Reset
```jule
#disable boundary
fn Reset(mut *self, n: int)
```
Reinitializes the FFT for work on sequences of length n\.

### Coefficients
```jule
#disable boundary
fn Coefficients(*self, mut dst: []cmplx128, seq: []cmplx128): []cmplx128
```
Computes the Fourier coefficients of a complex input sequence, converting the time series in seq into the frequency spectrum, placing the result in dst and returning it\. This transform is unnormalized; a call to Coefficients followed by a call of Sequence will multiply the input sequence by the length of the sequence\.

If the length of seq is not FFT\.Len\(\), Coefficients will panic\. If dst is nil, a new slice is allocated and returned\. If dst is not nil and the length of dst does not equal the length of seq, Coefficients will panic\. It is safe to use the same slice for dst and seq\.

### Sequence
```jule
#disable boundary
fn Sequence(*self, mut dst: []cmplx128, coeff: []cmplx128): []cmplx128
```
Computes the complex periodic sequence from the Fourier coefficients, converting the frequency spectrum in coeff into a time series, placing the result in dst and returning it\. This transform is unnormalized; a call to Coefficients followed by a call of Sequence will multiply the input sequence by the length of the sequence\.

If the length of coeff is not FFT\.Len\(\), Sequence will panic\. If dst is nil, a new slice is allocated and returned\. If dst is not nil and the length of dst does not equal the length of coeff, Sequence will panic\. It is safe to use the same slice for dst and coeff\.

### Freq
```jule
fn Freq(*self, i: int): f64
```
Returns the relative frequency center for coefficient i\. Freq will panic if i is negative or greater than or equal to FFT\.Len\(\)\.

### ShiftIdx
```jule
fn ShiftIdx(*self, i: int): int
```
Returns a shifted index into a slice of coefficients returned by the FFT so that indexing into the coefficients places the zero frequency component at the center of the spectrum\. ShiftIdx will panic if i is negative or greater than or equal to FFT\.Len\(\)\.

### UnshiftIdx
```jule
fn UnshiftIdx(*self, i: int): int
```
Returns inverse of ShiftIdx\. UnshiftIdx will panic if i is negative or greater than or equal to FFT\.Len\(\)\.

## RFFT
```jule
struct RFFT {
	// NOTE: contains filtered hidden or unexported fields
}
```
Fast Fourier Transform and its inverse for real sequences\.

### New
```jule
fn New(n: int): &RFFT
```
Returns an RFFT initialized for work on sequences of length n\.

### Len
```jule
fn Len(*self): int
```
Returns the length of the acceptable input\.

### Reset
```jule
#disable boundary
fn Reset(mut *self, n: int)
```
Reinitializes the RFFT for work on sequences of length n\.

### Coefficients
```jule
#disable boundary
fn Coefficients(*self, mut dst: []cmplx128, seq: []f64): []cmplx128
```
Computes the Fourier coefficients of the input sequence, converting the time series in seq into the frequency spectrum, placing the result in dst and returning it\. This transform is unnormalized; a call to Coefficients followed by a call of Sequence will multiply the input sequence by the length of the sequence\.

If the length of seq is not RFFT\.Len\(\), Coefficients will panic\. If dst is nil, a new slice is allocated and returned\. If dst is not nil and the length of dst does not equal RFFT\.Len\(\)/2\+1, Coefficients will panic\.

### Sequence
```jule
#disable boundary
fn Sequence(*self, mut dst: []f64, coeff: []cmplx128): []f64
```
Computes the real periodic sequence from the Fourier coefficients, converting the frequency spectrum in coeff into a time series, placing the result in dst and returning it\. This transform is unnormalized; a call to Coefficients followed by a call of Sequence will multiply the input sequence by the length of the sequence\.

If the length of coeff is not RFFT\.Len\(\)/2\+1, Sequence will panic\. If dst is nil, a new slice is allocated and returned\. If dst is not nil and the length of dst does not equal the length of coeff, Sequence will panic\.

### Freq
```jule
fn Freq(*self, i: int): f64
```
Returns the relative frequency center for coefficient i\. Freq will panic if i is negative or greater than or equal to RFFT\.Len\(\)\.

:::