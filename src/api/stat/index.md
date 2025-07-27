# julenum/stat

Package for statistics.

## Index

[fn ChiSquare\[T: float\]\(obs: \[\]T, exp: \[\]T\): f64](#chisquare)\
[fn ChiSquareDistance\[T: float\]\(x: \[\]T, y: \[\]T\): f64](#chisquaredistance)\
[fn Mean\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#mean)\
[fn GeometricMean\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#geometricmean)\
[fn HarmonicMean\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#harmonicmean)\
[fn RootMeanSquare\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#rootmeansquare)\
[fn CircularMean\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#circularmean)\
[fn Median\[T: integer \| float\]\(x: \[\]T\): f64](#median)\
[fn MedianInPlace\[T: integer \| float\]\(mut x: \[\]T\): f64](#medianinplace)\
[fn Correlation\[T: integer \| float\]\(x: \[\]T, y: \[\]T, weights: \[\]T\): f64](#correlation)\
[fn MeanVariance\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): \(f64, f64\)](#meanvariance)\
[fn Variance\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#variance)\
[fn Covariance\[T: integer \| float\]\(x: \[\]T, y: \[\]T, weights: \[\]T\): f64](#covariance)\
[fn Entropy\[T: integer \| float\]\(p: \[\]T\): f64](#entropy)\
[fn CrossEntropy\[T: integer \| float\]\(p: \[\]T, q: \[\]T\): f64](#crossentropy)\
[fn EuclideanDistance\[T: integer \| float\]\(p1: \[\]T, p2: \[\]T\): f64](#euclideandistance)\
[fn Sigmoid\[T: integer \| float\]\(x: T\): f64](#sigmoid)\
[fn LinearRegression\[T: integer \| float\]\(x: \[\]T, y: \[\]T, weights: \[\]T, origin: bool\): \(alpha: f64, beta: f64\)](#linearregression)\
[fn StdDev\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): f64](#stddev)\
[fn StdErr\(stdDev: f64, sampleSize: f64\): f64](#stderr)\
[fn StdScore\(x: f64, mean: f64, stdDev: f64\): f64](#stdscore)\
[fn Mode\[T: integer \| float\]\(x: \[\]T, weights: \[\]T\): \(val: f64, count: f64\)](#mode)\
[fn Bayes\[T: float\]\(prior: T, likelihood: T, evidence: T\): T](#bayes)



## ChiSquare
```jule
#disable boundary
fn ChiSquare[T: float](obs: []T, exp: []T): f64
```
Computes the chi\-square statistic between two vectors: observed and expected\. The lengths of obs and exp must be equal, otherwise it panics\.

Mathematically, the chi\-square statistic is defined as:<br>
```
χ² = Σᵢ [ (Oᵢ - Eᵢ)² / Eᵢ ]
where:
	Oᵢ = observed value at index i,
	Eᵢ = expected value at index i,
	and the summation is over all elements.
```
Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## ChiSquareDistance
```jule
#disable boundary
fn ChiSquareDistance[T: float](x: []T, y: []T): f64
```
Computes the chi\-square distance between two vectors: x and y\. The lengths of x and y must be equal, otherwise it panics\.

Mathematically, the chi\-square distance is defined as:<br>
```
χ² = 1/2 * Σᵢ [ (xᵢ - yᵢ)² / (xᵢ + yᵢ) ]
```
Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Mean
```jule
#disable boundary
fn Mean[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted mean of the data set x\.

Mathematically, the weighted mean is defined as:<br>
```
Mean = Σᵢ [ wᵢ * xᵢ ] / Σᵢ [ wᵢ ]
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## GeometricMean
```jule
#disable boundary
fn GeometricMean[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted geometric mean of the data set x\.

Mathematically, the weighted geometric mean is defined as:<br>
```
G = (x₁^w₁ * x₂^w₂ * ... * xₙ^wₙ)^(1 / Σᵢ [ wᵢ ])
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## HarmonicMean
```jule
#disable boundary
fn HarmonicMean[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted harmonic mean of the data set x\.

Mathematically, the weighted harmonic mean is defined as:<br>
```
H = Σᵢ [ wᵢ ] / Σᵢ [ wᵢ/xᵢ ]
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## RootMeanSquare
```jule
#disable boundary
fn RootMeanSquare[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted root mean square of the data set x\.

Mathematically, the weighted root mean square is defined as:<br>
```
RMS = √(Σᵢ [ wᵢ * xᵢ² ] / Σᵢ [ wᵢ ])
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## CircularMean
```jule
#disable boundary
fn CircularMean[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted circular mean of the data set x\.

Mathematically, the weighted circular mean is defined as:<br>
```
C = atan2(Σᵢ [ wᵢ * sin(xᵢ) ], Σᵢ [ wᵢ * cos(xᵢ) ])
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Median
```jule
#disable boundary
fn Median[T: integer | float](x: []T): f64
```
Computes the median of the data set x\. This function allocates a new copy of x to avoid modifying the original data\. If preserving the original data is not necessary or x won&#39;t be used afterward, consider using MedianInPlace for better performance and zero allocation\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## MedianInPlace
```jule
fn MedianInPlace[T: integer | float](mut x: []T): f64
```
Computes the median of the data set x in\-place \(modifies x\)\. This function mutates the input slice, and its final ordering is undefined\. Designed for zero\-allocation, memory\-efficient use cases\. If the original data must be preserved or x will be used afterward, use Median instead\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Correlation
```jule
#disable boundary
fn Correlation[T: integer | float](x: []T, y: []T, weights: []T): f64
```
Computes the weighted Pearson correlation coefficient between two data sets x and y\. Length of data sets must be equal\. Returns 0 if lenghts are zero\.

Mathematically, the weighted Pearson correlation coefficient is defined as:<br>
```
r_w = Σᵢ [ wᵢ * (xᵢ - x̄_w)(yᵢ - ȳ_w) ] / √(Σᵢ [ wᵢ * (xᵢ - x̄_w)² ]) * √(Σᵢ [ wᵢ * (yᵢ - ȳ_w)² ])
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to the data sets lengths\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## MeanVariance
```jule
fn MeanVariance[T: integer | float](x: []T, weights: []T): (f64, f64)
```
Computes the weighted mean and the weighted unbiased sample variance of the data set x\. This is faster than calling Mean and Variance functions separately\.

Mathematically, the weighted mean is defined as:<br>
```
Mean = Σᵢ [ wᵢ * xᵢ ] / Σᵢ [ wᵢ ]
```
Mathematically, the weighted unbiased sample variance is defined as:<br>
```
var(x) = Σᵢ [ wᵢ * (xᵢ - x̄)² ] / (Σᵢ [ wᵢ ] - 1)
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Variance
```jule
fn Variance[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted unbiased sample variance of the data set x\.

Mathematically, the weighted unbiased sample variance is defined as:<br>
```
var(x) = Σᵢ [ wᵢ * (xᵢ - x̄)² ] / (Σᵢ [ wᵢ ] - 1)
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Covariance
```jule
fn Covariance[T: integer | float](x: []T, y: []T, weights: []T): f64
```
Computes the weighted unbiased sample covariance of the data sets x and y\. Length of data sets must be equal\.

Mathematically, the weighted unbiased sample covariance is defined as:<br>
```
cov_w(x, y) = Σᵢ [ wᵢ * (xᵢ - x̄)(yᵢ - ȳ) ] / (Σᵢ [ wᵢ ] - (Σᵢ [ wᵢ² ] / Σᵢ [ wᵢ ]))
```
If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to the data sets lengths\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Entropy
```jule
fn Entropy[T: integer | float](p: []T): f64
```
Computes the Shannon entropy of a distribution or the distance between two distributions using natural logarithm\. Returns zero for empty slice\.

Mathematically, the Shannon entropy is defined as:<br>

- Σᵢ \[ pᵢ \* logₑ\(pᵢ\) \]

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## CrossEntropy
```jule
#disable boundary
fn CrossEntropy[T: integer | float](p: []T, q: []T): f64
```
Computes the cross Shannon entropy between the two distributions specified in p and q using natural logarithm\. Returns zero for empty slice\. Length of p and q must be equal\.

Mathematically, the cross Shannon entropy is defined as:<br>

- Σᵢ \[ pᵢ \* logₑ\(qᵢ\) \]

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## EuclideanDistance
```jule
#disable boundary
fn EuclideanDistance[T: integer | float](p1: []T, p2: []T): f64
```
Computes the Euclidean Distance between two points p1 and p2\. Length of p1 and p2 must be equal\. Returns zero for empty input\.

Mathematically, the Euclidean Distance is defined as:<br>
```
d(p1, p2) = √(Σᵢ [ (p1ᵢ - p2ᵢ)² ])
```
Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Sigmoid
```jule
fn Sigmoid[T: integer | float](x: T): f64
```
Computes the Sigmoid function\.

Mathematically, the Sigmoid function is defined as:<br>
```
1 / (1 + exp(-x))
```
Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## LinearRegression
```jule
#disable boundary
fn LinearRegression[T: integer | float](x: []T, y: []T, weights: []T, origin: bool): (alpha: f64, beta: f64)
```
Computes the weighted best\-fit line

```
y = alpha + beta*x
```
to the data in x and y\. If origin is true, the regression is forced to pass through the origin\. Length of x and y must be equal\.

Specifically, computes the values of alpha and beta such that the total residual

```
Σᵢ [ wᵢ * (yᵢ - alpha - beta*xᵢ)² ]
```
is minimized\. If origin is true, then alpha is forced to be zero\.

If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## StdDev
```jule
fn StdDev[T: integer | float](x: []T, weights: []T): f64
```
Computes the weighted sample standard deviation\.

If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## StdErr
```jule
fn StdErr(stdDev: f64, sampleSize: f64): f64
```
Computes the standard error in the mean with the given values\.

## StdScore
```jule
fn StdScore(x: f64, mean: f64, stdDev: f64): f64
```
Computes the standard score \(a\.k\.a\. z\-score, z\-value\) for the value x with the given mean and standard deviation, i\.e\.

Mathematically, the standard score is defined as:<br>
```
(x - mean) / stdDev
```


## Mode
```jule
#disable boundary
fn Mode[T: integer | float](x: []T, weights: []T): (val: f64, count: f64)
```
Computes the most common value in the data set x and the given weights\. Strict equality is used when comparing values, so users should take caution\. If several values are the mode, any of them may be returned\.

If len\(weights\) == 0, then all of the weights are 1\. Otherwise len\(weights\) must be equal to len\(x\)\.

Computations are performed using 64\-bit floating\-point precision and result is in the same precision, casting to proper type is responsibility of the developer\.

## Bayes
```jule
fn Bayes[T: float](prior: T, likelihood: T, evidence: T): T
```
Computes the posterior probability P\(A\|B\) using Bayes&#39; Theorem:<br>
```
P(A|B) = P(B|A) * P(A) / P(B)
```