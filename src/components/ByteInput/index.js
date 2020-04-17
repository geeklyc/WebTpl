import React, { useState, useEffect } from 'react';
import { Input, } from 'antd';
import charLength from './../../utils/utils';

class ByteInput extends React.PureComponent {
// const ByteInput = ({ value = {}, onChange }) => {
    // const [newText, setNewText] = useState('');

    onNewTextChange = (e) => {
        // const temp = e.target.value;
        const temp = e.target.value;
        // console.log('onNewTextChange', temp);
        // console.log('value', value, !('newText' in value));
        // if (!('newText' in value)) {
        //     setNewText(temp);
        // }
        
        const currentLen = charLength(temp);
        // console.log('onNewTextChange', temp, e.type);
        const ret = temp.substring(0, Math.min(currentLen, 5));

        const { onChange, value } = this.props;
        if (onChange) {
            // console.log('onChange', value);
            onChange({
                ...value,
                newText: ret,
            })
        }
    }

    // useEffect(() => {
    //     console.log('值变化1', value.newText);
    //     console.log('值变化2', newText);
    // })

    render() {
        const { value } = this.props;
        return (
            <Input value={value.newText} onChange={this.onNewTextChange} ></Input>
        );
    }
}

export default ByteInput;