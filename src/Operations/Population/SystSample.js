function SystSample(c){
    let samplesize = c[0];
    let population = c[1].slice();
    let k = Math.round(population.length / samplesize);

    let sample = [];

    for(let i = 0; i <= population.length; i += k)
    {
        sample.push(population[i]);
    }

    while(sample.length != samplesize)
    {
        sample = sample.slice(0, sample.length - 1);
    }

    return sample;
}
module.exports = SystSample;