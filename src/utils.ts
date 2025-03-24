import {LocalStorage, PERF_KEY} from './local-storage';

function arithmeticMean(id: string, phase: string) {
    const storage = LocalStorage.restore(PERF_KEY) || {};
    const data = (storage[id]?.[phase] || []) as number[];
    return data.reduce((a, b) => a + b, 0) / data.length;
}

// @ts-ignore
window.__utils__ = {
    arithmeticMean,
};
