import React from 'react';
import ComponentTitle from '../../../Components/ComponentTitle';
import DataTableComponent from '../../../Components/DataTableComponent';
import {assetsData} from '../../../UserData/TableDatas';

const assetsTableHeader = [
"name",
"code",
"serialNo",
"working",
"type",
"date",
];

const AssetsComponent = () => {
  return (
    <div>
      <ComponentTitle title="Assets" />
      <DataTableComponent tableHeader={assetsTableHeader} tableList={assetsData} />
    </div>
  );
};

export default AssetsComponent;
