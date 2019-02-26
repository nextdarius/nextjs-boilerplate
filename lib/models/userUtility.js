class UserUtility {
  static createSourceForTable(data) {
    let table = [];
    data.forEach(user => {
      table.push({
        key: user.id,
        name: user.name,
        email: user.email
      });
    });
    return table;
  }

  static createColumns(columnNames) {
    let columns = [];
    columnNames.forEach(columnName => {
      columns.push({
        title: columnName,
        dataIndex: columnName.toLowerCase(),
        key: columnName.toLowerCase()
      });
    });
    return columns;
  }
}

export default UserUtility;
