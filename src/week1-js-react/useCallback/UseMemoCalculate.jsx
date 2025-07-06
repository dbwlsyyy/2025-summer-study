import React, { useMemo, useState } from 'react';

const hardCalulate = (num) => {
    console.log('어려운 계산');
    for (let i = 0; i < 999999999; i++) {
        /* 의미없는 루프 */
    }
    return num + 10000;
};

const easyCalulate = (num) => {
    console.log('쉬운 계산');
    return num + 1;
};

function UseMemoCalculate() {
    const [hardNum, setHardNum] = useState(1);
    const [easyNum, setEasyNum] = useState(1);

    const hardSum = useMemo(() => {
        return hardCalulate(hardNum);
    }, [hardNum]);
    const easySum = easyCalulate(easyNum);

    console.log(hardSum);
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <h3>어려운 계산기</h3>
                <input
                    type="number"
                    value={hardNum}
                    onChange={(e) => {
                        setHardNum(parseInt(e.target.value));
                    }}
                ></input>
                <span> + 10000 = {hardSum}</span>
            </div>
            <hr />
            <div style={{ marginTop: '50px' }}>
                <h3>쉬운 계산기</h3>
                <input
                    type="number"
                    value={easyNum}
                    onChange={(e) => {
                        setEasyNum(parseInt(e.target.value));
                    }}
                ></input>
                <span> + 1 = {easySum}</span>
            </div>
        </div>
    );
}

export default UseMemoCalculate;
