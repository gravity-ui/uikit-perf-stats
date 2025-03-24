import React, {Profiler as ReactProfiler} from 'react';
import {LocalStorage, PERF_KEY} from '../local-storage';

export function Profiler(props: {id: string; children?: React.ReactNode}) {
    const handleRender = React.useCallback<React.ProfilerOnRenderCallback>(
        (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
            console.log(
                {
                    id,
                    phase,
                    actualDuration,
                    baseDuration,
                    startTime,
                    commitTime,
                    interactions,
                },
                commitTime - startTime,
            );

            const storage = LocalStorage.restore(PERF_KEY) || {};

            if (!storage[id]) {
                storage[id] = {};
            }

            if (!storage[id][phase]) {
                storage[id][phase] = [];
            }

            storage[id][phase].push(commitTime - startTime);
            LocalStorage.store(PERF_KEY, storage);
        },
        [],
    );

    return (
        <ReactProfiler id={props.id} onRender={handleRender}>
            {props.children}
        </ReactProfiler>
    );
}
