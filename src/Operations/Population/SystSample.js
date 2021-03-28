function SystSample(c){
    let samplesize = c[0];
    let population = c[1].splice();
    let k = Math.round(population.length / samplesize);

    let sample = [];

    for(let i = 0; i < samplesize; i += k)
    {
        sample.push(population[i]);
    }

    return sample;
}
module.exports = SystSample;