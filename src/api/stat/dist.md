# julenum/stat/dist

Package for probability distributions.

## Index

[struct Beta](#beta)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NumParams\(\*self\): int](#numparams)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CDF\(\*self, x: f64\): f64](#cdf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PDF\(\*self, x: f64\): f64](#pdf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LogPDF\(\*self, x: f64\): f64](#logpdf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Survival\(\*self, x: f64\): f64](#survival)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Quantile\(\*self, p: f64\): f64](#quantile)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Entropy\(\*self\): f64](#entropy)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ExcessKurtosis\(\*self\): f64](#excesskurtosis)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mean\(\*self\): f64](#mean)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(\*self\): f64](#mode)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rand\(\*self\): f64](#rand)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Variance\(\*self\): f64](#variance)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdDev\(\*self\): f64](#stddev)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fit\(mut \*self, samples: \[\]f64\)](#fit)\
[struct Gamma](#gamma)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NumParams\(\*self\): int](#numparams-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CDF\(\*self, x: f64\): f64](#cdf-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PDF\(\*self, x: f64\): f64](#pdf-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LogPDF\(\*self, x: f64\): f64](#logpdf-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MGF\(\*self, t: f64\): f64](#mgf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Survival\(\*self, x: f64\): f64](#survival-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Quantile\(\*self, p: f64\): f64](#quantile-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Entropy\(\*self\): f64](#entropy-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ExcessKurtosis\(\*self\): f64](#excesskurtosis-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mean\(\*self\): f64](#mean-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(\*self\): f64](#mode-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rand\(\*self\): f64](#rand-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Skewness\(\*self\): f64](#skewness)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Variance\(\*self\): f64](#variance-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdDev\(\*self\): f64](#stddev-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fit\(mut \*self, samples: \[\]f64\)](#fit-1)\
[struct Bernoulli](#bernoulli)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn NumParams\(\*self\): int](#numparams-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn CDF\(\*self, x: f64\): f64](#cdf-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn PMF\(\*self, x: f64\): f64](#pmf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn LogPMF\(\*self, x: f64\): f64](#logpmf)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn MGF\(\*self, t: f64\): f64](#mgf-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Survival\(\*self, x: f64\): f64](#survival-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Quantile\(\*self, p: f64\): f64](#quantile-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Entropy\(\*self\): f64](#entropy-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn ExcessKurtosis\(\*self\): f64](#excesskurtosis-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mean\(\*self\): f64](#mean-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Median\(\*self\): f64](#median)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Mode\(\*self\): f64](#mode-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Support\(\*self\): \(min: f64, max: f64\)](#support)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Rand\(\*self\): f64](#rand-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Skewness\(\*self\): f64](#skewness-1)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Variance\(\*self\): f64](#variance-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn StdDev\(\*self\): f64](#stddev-2)\
&nbsp;&nbsp;&nbsp;&nbsp;[fn Fit\(mut \*self, samples: \[\]f64\)](#fit-2)



## Beta
```jule
struct Beta {
	Alpha: f64 // Shape parameter alpha
	Beta:  f64 // Shape parameter beta
	RNG:   &rand::Rand
}
```
Represents a Beta distribution\. It is a continuous probability distribution defined on the interval \[0, 1\]\. It is parameterized by two positive shape parameters, alpha \(α\) and beta \(β\)\. The Beta distribution is often used to model the behavior of random variables restricted to intervals of finite length, such as probabilities or proportions\.

Uses the RNG for randomness\. It may be nil\. Implementation will use global random functions if RNG is nil\.

Parameters:<br>

- Alpha \(α\): First shape parameter \(α &gt; 0\)\.
- Beta \(β\): Second shape parameter \(β &gt; 0\)\.

### NumParams
```jule
fn NumParams(*self): int
```
Returns the number of parameters required to define the distribution\.

### CDF
```jule
fn CDF(*self, x: f64): f64
```
Computes the Cumulative Distribution Function \(CDF\) at x\. The CDF is the probability that a random variable X is less than or equal to a given value x\. For the Beta distribution, the CDF is given by the regularized incomplete beta function I\_x\(α, β\)\. x must be in the interval \[0, 1\]\.

Formula:<br>
```
CDF(x) = I_x(α, β)
where I_x(α, β) is the regularized incomplete beta function.
```


### PDF
```jule
fn PDF(*self, x: f64): f64
```
Computes the Probability Density Function \(PDF\) at x\. The PDF gives the relative likelihood for this continuous random variable to take on a given value\. x must be in the interval \[0, 1\]\.

Formula:<br>
```
PDF(x) = (x^(α-1) * (1-x)^(β-1)) / Beta(α, β)
where Beta(α, β) is the Beta function.
```


### LogPDF
```jule
fn LogPDF(*self, x: f64): f64
```
LogProb calculates the natural logarithm of the Probability Density Function \(PDF\) for the distribution\. This is often used in maximum likelihood estimation to avoid underflow with very small probabilities\.

Formula: log\(PDF\(x\)\) = \(α \- 1\)log\(x\) \+ \(β \- 1\)log\(1 \- x\) \- log\(Beta\(α, β\)\) where Beta\(α, β\) is the Beta function\.

Parameters:<br>

- x: The value for which to calculate the log probability\. Must be in the interval \[0, 1\]\.

Returns: The natural logarithm of the PDF at x\. Returns \-Inf if x is outside \[0, 1\]\.

### Survival
```jule
fn Survival(*self, x: f64): f64
```
Computes the Survival Function \(SF\), also known as the Complementary Cumulative Distribution Function \(CCDF\)\. The Survival Function is the probability that a random variable X is greater than a given value x\. SF\(x\) = P\(X &gt; x\) = 1 \- CDF\(x\)

### Quantile
```jule
fn Quantile(*self, p: f64): f64
```
Computes the Quantile Function \(inverse CDF\) for the distribution\. The quantile function returns the value x such that the probability of a random variable being less than or equal to x is p\. This requires numerically solving I\_x\(α, β\) = p\. Returns NaN if p is outside \[0, 1\]\.

### Entropy
```jule
fn Entropy(*self): f64
```
Computes the entropy of the distribution\. Entropy measures the uncertainty or randomness of the distribution\.

Formula:<br>
```
H(X) = log(Beta(α, β)) - (α - 1)ψ(α) - (β - 1)ψ(β) + (α + β - 2)ψ(α + β)
where Beta(α, β) is the Beta function, and ψ is the digamma function.
```


### ExcessKurtosis
```jule
fn ExcessKurtosis(*self): f64
```
Computes the excess kurtosis of the distribution\. Excess kurtosis measures the &#34;tailedness&#34; of the distribution relative to a normal distribution\. A positive excess kurtosis indicates &#34;fat tails&#34; \(more outliers\), while a negative value indicates &#34;thin tails&#34;\.

Formula:<br>
```
Excess Kurtosis = 6 * ((α + β + 1) * (α * β - α - β - 1) + 2) / ((α + β + 2) * (α + β + 3))
More precisely, for a Beta(α, β) distribution:
Kurtosis = (6 * ( (α + β + 1) * (α * β - α - β - 1) + 2 ) ) / ( (α + β + 2) * (α + β + 3) * α * β )
Excess Kurtosis = Kurtosis - 3
```


### Mean
```jule
fn Mean(*self): f64
```
Computes the mean \(expected value\) of the distribution\.

Formula:<br>
```
E[X] = α / (α + β)
```


### Mode
```jule
fn Mode(*self): f64
```
Computes the mode of the distribution\. The mode is the value at which the probability density function \(PDF\) is maximized\.

Formula:<br>

- If α &gt; 1 and β &gt; 1: Mode = \(α \- 1\) / \(α \+ β \- 2\)
- If α &lt;= 1 and β &lt;= 1: The mode is not unique or is at the boundary\.
- If α = 1 and β = 1: Any value in \[0, 1\] \(Uniform distribution\)\. Returns 0\.5\.
- If α &lt; 1 and β = 1: Mode = 0\.
- If α = 1 and β &lt; 1: Mode = 1\.
- If α &lt; 1 and β &lt; 1: Bimodal, modes at 0 and 1\. Conventionally, returns NaN or one of the modes\. ```
    Here, we'll return NaN for non-unique modes, or the boundary mode.
```


### Rand
```jule
fn Rand(*self): f64
```
Returns a random number from the distribution\. This typically uses a transformation from Gamma\-distributed random variables\. If X \~ Gamma\(α, 1\) and Y \~ Gamma\(β, 1\), then X / \(X \+ Y\) \~ Beta\(α, β\)\.

### Variance
```jule
fn Variance(*self): f64
```
Computes the variance of distribution\. Variance measures how far the numbers are spread out from the average value\.

Formula:<br>
```
Var(X) = (αβ) / ((α + β)^2 * (α + β + 1))
```


### StdDev
```jule
fn StdDev(*self): f64
```
Computes the standard deviation of distribution\. The standard deviation is the square root of the variance, measuring the spread of the distribution\.

Formula:<br>
```
StdDev = sqrt( (αβ) / ((α + β)^2 * (α + β + 1)) )
```


### Fit
```jule
fn Fit(mut *self, samples: []f64)
```
Estimates the parameters α and β of the distribution from sample data using the method of moments\. All sample values must be either 0 or 1\.

## Gamma
```jule
struct Gamma {
	K:     f64 // Shape parameter (k or α)
	Theta: f64 // Scale parameter (θ or β)
	RNG:   &rand::Rand
}
```
Represents a Gamma distribution\. It is a continuous probability distribution defined on the positive real numbers\. It is parameterized by a shape parameter k \(or α\) and a scale parameter θ \(or β\)\. The Gamma distribution is widely used to model waiting times or the sum of exponentially distributed random variables\.

Uses the RNG for randomness\. It may be nil\. Implementation will use global random functions if RNG is nil\.

Parameters:<br>

- K \(Shape\): The shape parameter \(k or α\), must be greater than 0\.
- Theta \(Scale\): The scale parameter \(θ or β\), must be greater than 0\.

### NumParams
```jule
fn NumParams(*self): int
```
Returns the number of parameters required to define the distribution\.

### CDF
```jule
fn CDF(*self, x: f64): f64
```
Computes the Cumulative Distribution Function \(CDF\) at x\. The CDF is the probability that a random variable X is less than or equal to a given value x\. For the Gamma distribution, the CDF is given by the regularized lower incomplete gamma function P\(k, x/θ\)\. x must be non\-negative\.

Formula:<br>
```
CDF(x) = P(k, x/θ)
where P is the regularized lower incomplete gamma function.
```


### PDF
```jule
fn PDF(*self, x: f64): f64
```
Computes the Probability Density Function \(PDF\) for the Gamma distribution\. The PDF gives the relative likelihood for this continuous random variable to take on a given value\. x must be non\-negative\. Returns 0 if x&lt;0\.

Formula:<br>
```
PDF(x) = (1 / (Γ(k) * θ^k)) * x^(k-1) * e^(-x/θ)
where Γ is the Gamma function.
```


### LogPDF
```jule
fn LogPDF(*self, x: f64): f64
```
Computes the natural logarithm of the Probability Density Function \(PDF\) at x\. This is often used in maximum likelihood estimation to avoid underflow with very small probabilities\. x must be non\-negative\. Returns \-Inf if x&lt;0\.

Formula:<br>
```
log(PDF(x)) = (k - 1)log(x) - (x / θ) - log(Γ(k)) - k log(θ)
where Γ is the Gamma function.
```


### MGF
```jule
fn MGF(*self, t: f64): f64
```
Computes the Moment Generating Function \(MGF\) of the distribution\.

Formula:<br>
```
MGF(t) = (1 - θt)^(-k), for t < 1/θ
```


### Survival
```jule
fn Survival(*self, x: f64): f64
```
Computes the Survival Function \(SF\), also known as the Complementary Cumulative Distribution Function \(CCDF\)\. The Survival Function is the probability that a random variable X is greater than a given value x\. SF\(x\) = P\(X &gt; x\) = 1 \- CDF\(x\)

### Quantile
```jule
fn Quantile(*self, p: f64): f64
```
Computes the Quantile Function \(inverse CDF\) for the distribution\. The quantile function returns the value x such that the probability of a random variable being less than or equal to x is p\. This requires numerically solving P\(k, x/θ\) = p\. Returns NaN if p is outside \[0, 1\]\.

### Entropy
```jule
fn Entropy(*self): f64
```
Returns the differential entropy of the distribution\.

Formula:<br>
```
Entropy = k - log(θ) + log(Γ(k)) + (1 - k)ψ(k)
where ψ is the digamma function (Γ'/Γ)
```


### ExcessKurtosis
```jule
fn ExcessKurtosis(*self): f64
```
Computes the excess kurtosis of the distribution\. Excess kurtosis measures the &#34;tailedness&#34; of the distribution relative to a normal distribution\.

Formula:<br>
```
Excess Kurtosis = 6 / k
```


### Mean
```jule
fn Mean(*self): f64
```
Computes the mean \(expected value\) of the distribution\.

Formula:<br>
```
E[X] = k * θ
```


### Mode
```jule
fn Mode(*self): f64
```
Computes the mode of the distribution\. The mode is the value at which the probability density function \(PDF\) is maximized\. Returns 0 if k&lt;1\.

Formula:<br>

- If k &gt;= 1: Mode = \(k \- 1\) \* θ
- If k &lt; 1: The mode is at x = 0 \(or undefined for k&lt;=0, but handled by constructor\)\.

### Rand
```jule
fn Rand(*self): f64
```
Generates a random number from the distribution\. Generating Gamma variates is non\-trivial and depends on the shape parameter k\. Common algorithms include Marsaglia and Tsang&#39;s method for k &gt;= 1 and rejection sampling for k &lt; 1\.

### Skewness
```jule
fn Skewness(*self): f64
```
Computes the skewness of the distribution\.

Formula:<br>
```
Skewness = 2 / sqrt(k)
```


### Variance
```jule
fn Variance(*self): f64
```
Computes the variance of the distribution\. Variance measures how far the numbers are spread out from the average value\.

Formula:<br>
```
Var(X) = k * θ²
```


### StdDev
```jule
fn StdDev(*self): f64
```
Computes the standard deviation of the distribution\. The standard deviation is the square root of the variance, measuring the spread of the distribution\.

Formula:<br>
```
StdDev = sqrt(k * θ^2) = θ * sqrt(k)
```


### Fit
```jule
fn Fit(mut *self, samples: []f64)
```
Estimates the parameters \(k, θ\) of the distribution from sample data using the method of moments\. Requires at least 2 non\-negative samples\.

## Bernoulli
```jule
struct Bernoulli {
	P:   f64
	RNG: &rand::Rand
}
```
Represents an Bernoulli distribution\. It models a single experiment with two possible outcomes: success \(1\) or failure \(0\)\. The parameter &#39;P&#39; is the probability of success\.

Uses the RNG for randomness\. It may be nil\. Implementation will use global random functions if RNG is nil\.

Parameters:<br>
```
P: Probability of success (0 <= p <= 1).
```


### NumParams
```jule
fn NumParams(*self): int
```
Returns the number of parameters required to define the distribution\.

### CDF
```jule
fn CDF(*self, x: f64): f64
```
Computes the Cumulative Distribution Function \(CDF\) at x\. The CDF is the probability that a random variable X is less than or equal to a given value x\.

For a distribution:<br>

- If x &lt; 0: CDF\(x\) = 0
- If 0 &lt;= x &lt; 1: CDF\(x\) = 1 \- p \(Probability of failure\)
- If x &gt;= 1: CDF\(x\) = 1 \(Probability of success or failure, always 1\)

### PMF
```jule
fn PMF(*self, x: f64): f64
```
Computes the Probability Mass Function \(PMF\) at x\. The PMF gives the probability that a discrete random variable is exactly equal to some value\.

For a distribution:<br>

- P\(X=1\) = p
- P\(X=0\) = 1 \- p
- P\(X=x\) = 0 for x \!= 0 and x \!= 1

### LogPMF
```jule
fn LogPMF(*self, x: f64): f64
```
Computes the natural logarithm of the Probability Mass Function \(PMF\) at x\. This is often used in maximum likelihood estimation to avoid underflow with very small probabilities\.

For a distribution:<br>

- If x = 1: log\(P\(X=1\)\) = log\(p\)
- If x = 0: log\(P\(X=0\)\) = log\(1\-p\)
- Otherwise: log\(0\) = \-Inf

### MGF
```jule
fn MGF(*self, t: f64): f64
```
Computes the Moment Generating Function \(MGF\) of the distribution at t\. The MGF is useful for deriving moments of the distribution\.

Formula:<br>
```
M_X(t) = E[e^(tX)] = (1 - p) + p * e^t
```


### Survival
```jule
fn Survival(*self, x: f64): f64
```
Computes the Survival Function \(SF\) at x, also known as the Complementary Cumulative Distribution Function \(CCDF\)\. The Survival Function is the probability that a random variable X is greater than a given value x\. SF\(x\) = P\(X &gt; x\) = 1 \- CDF\(x\)

### Quantile
```jule
fn Quantile(*self, p: f64): f64
```
Computes the Quantile Function \(inverse CDF\) for the distribution\. The quantile function returns the value x such that the probability of a random variable being less than or equal to x is p\. Returns NaN if p is outside \[0, 1\]\.

### Entropy
```jule
fn Entropy(*self): f64
```
Computes the entropy of the distribution\. Entropy is a measure of the uncertainty or randomness of the distribution\.

Formula:<br>
```
H(X) = -p * log2(p) - (1-p) * log2(1-p)
Note: If p is 0 or 1, the corresponding term (e.g., 0 * log(0)) is taken as 0.
```


### ExcessKurtosis
```jule
fn ExcessKurtosis(*self): f64
```
Computes the excess kurtosis of the distribution\. Excess kurtosis measures the &#34;tailedness&#34; of the distribution relative to a normal distribution\. A positive excess kurtosis indicates &#34;fat tails&#34; \(more outliers\), while a negative value indicates &#34;thin tails&#34;\.

Formula:<br>
```
(1 - 6p(1-p)) / (p(1-p))
```


### Mean
```jule
fn Mean(*self): f64
```
Computes the mean \(expected value\) of the distribution\.

Formula:<br>
```
E[X] = p
```


### Median
```jule
fn Median(*self): f64
```
Computes the median of the distribution\. The median is the value separating the higher half from the lower half of a data sample\.

For a distribution:<br>

- If p &lt; 0\.5: Median = 0
- If p &gt; 0\.5: Median = 1
- If p = 0\.5: Median can be any value between 0 and 1 \(inclusive\), but commonly defined as 0\.5 or either 0 or 1\. Here, we return 0\.5 for consistency\.

### Mode
```jule
fn Mode(*self): f64
```
Computes the mode \(most likely value\) of the distribution\. For a distribution, the mode is:<br>

- 0 if p &lt; 0\.5
- 1 if p &gt; 0\.5
- Either 0 or 1 if p = 0\.5\. Here, we return 0 for consistency\.

### Support
```jule
fn Support(*self): (min: f64, max: f64)
```
Returns the support \(domain\) of the distribution\. The support is the set of possible values the random variable can take\.

### Rand
```jule
fn Rand(*self): f64
```
Returns a random number from the distribution\. It returns 1 with probability &#39;P&#39; and 0 with probability &#39;1\-p&#39;\.

### Skewness
```jule
fn Skewness(*self): f64
```
Computes the skewness of the distribution\. Skewness is a measure of the asymmetry of the probability distribution about its mean\. A positive skewness indicates a tail on the right side, and negative indicates a tail on the left\.

Formula:<br>
```
Skewness = (1 - 2p) / sqrt(p(1-p))
Note: Returns NaN if p is 0 or 1.
```


### Variance
```jule
fn Variance(*self): f64
```
Computes the variance of the distribution\. Variance measures how far the numbers are spread out from the average value\.

Formula:<br>
```
Var(X) = p * (1 - p)
```


### StdDev
```jule
fn StdDev(*self): f64
```
Computes the standard deviation of the distribution\. The standard deviation is the square root of the variance, measuring the spread of the distribution\.

Formula:<br>
```
StdDev = sqrt(p * (1 - p))
```


### Fit
```jule
fn Fit(mut *self, samples: []f64)
```
Estimates the distribution parameter \(P\) from a sample of observations\.

This method performs Maximum Likelihood Estimation \(MLE\) using the formula:<br>
```
p̂ = (1 / n) * Σᵢ [ xᵢ ]
```
All sample values must be either 0 or 1\. If the sample contains any value outside this set, it panics\.