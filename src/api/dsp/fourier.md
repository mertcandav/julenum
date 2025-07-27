# julenum/dsp/fourier

Package for Discrete Fourier Transform (DFT).

## Index

[fn FFT\(mut a: \[\]cmplx128, invert: bool\)](#fft)\
[fn FuseFFT\(mut a: \[\]cmplx128, mut b: \[\]cmplx128, invert: bool\)](#fusefft)



## FFT
```jule
fn FFT(mut a: []cmplx128, invert: bool)
```
Computes the discrete Fourier transform \(DFT\) of the given complex\-valued slice using the in\-place Cooley–Tukey radix\-2 algorithm\.

If invert is true, it computes the inverse FFT \(IFFT\) instead\. The input length must be a power of two; otherwise, the behavior is undefined\.

This function modifies the input slice in\-place\. For inverse FFT, results are scaled by 1/len\.

## FuseFFT
```jule
fn FuseFFT(mut a: []cmplx128, mut b: []cmplx128, invert: bool)
```
Computes the discrete Fourier transform \(DFT\) of the given complex\-valued slices using the in\-place Cooley–Tukey radix\-2 algorithm\.

Computes FFT for a and b, this is efficient than calling FFT for a and b separately;<br>
```
{ FFT(a, invert); FFT(b, invert) } == FuseFFT(a, b, invert)
```
If invert is true, it computes the inverse FFT \(IFFT\) instead\. Length of the input slices must be equal and a power of two; otherwise, the behavior is undefined\.

This function modifies the input slices in\-place\. For inverse FFT, results are scaled by 1/len\.