import { DynamoDB } from 'aws-sdk';

class DynamoConverter {

    convert(input, converterFn) {
        if (!input) {
            throw new Error('Input is undefined');
        }
        let output;
        const _input = JSON.parse(input);
        if (Array.isArray(_input)) {
            output = _input.map((i) => converterFn(i));
        } else {
            output = converterFn(_input);
        }
        return JSON.stringify(output, null, 2);
    }
}

export class DynamoToJSONConverter extends DynamoConverter {

    convert(input) {
        return super.convert(input, DynamoDB.Converter.unmarshall);
    }   
}

export class JSONToDynamoConverter extends DynamoConverter {
    convert(input) {
        return super.convert(input, DynamoDB.Converter.marshall);
    }
}