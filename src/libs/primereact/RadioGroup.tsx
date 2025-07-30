import * as React from 'react';

import {RadioButton} from 'primereact/radiobutton';

import {RADIO_GROUP_DATA} from '../constants';

export const PrimereactRadioGroup = () => {
    return (
        <React.Fragment>
            {RADIO_GROUP_DATA.map((label, index) => (
                // https://primereact.org/radiobutton/#group
                <div key={index} className="flex flex-wrap gap-3">
                    <div key={index} className="flex align-items-center">
                        <RadioButton
                            key={index}
                            inputId={`${label}_${index}_1`}
                            name={label}
                            value={1}
                        />
                        <label htmlFor={`${label}_${index}_1`} className="ml-2">
                            {label}
                        </label>
                    </div>
                    <div key={index} className="flex align-items-center">
                        <RadioButton
                            key={index}
                            inputId={`${label}_${index}_2`}
                            name={label}
                            value={2}
                        />
                        <label htmlFor={`${label}_${index}_2`} className="ml-2">
                            {label}
                        </label>
                    </div>
                    <div key={index} className="flex align-items-center">
                        <RadioButton
                            key={index}
                            inputId={`${label}_${index}_3`}
                            name={label}
                            value={3}
                        />
                        <label htmlFor={`${label}_${index}_3`} className="ml-2">
                            {label}
                        </label>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};
