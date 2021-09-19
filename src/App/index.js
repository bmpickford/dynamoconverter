import { Converter } from "./components/Converter/Converter";
import { DynamoToJSONConverter, JSONToDynamoConverter } from './utils/DynamoConverter';

import './index.css';

export default function App() {
    return (
        <Converter
            fromConverter={new DynamoToJSONConverter().convert}
            fromTitle={'DynamoDB JSON'}
            toConverter={new JSONToDynamoConverter().convert}
            toTitle={'Raw JSON'} />
    );
}