import { JTable } from '../lib/jtable';

const jTable = new JTable();

it('Checks JTable render()', () => {
    expect(jTable.render()).toEqual('rendering table.');
});