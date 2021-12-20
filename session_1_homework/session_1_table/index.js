class Table {
    constructor(tableSelector, rowsSelector, columnsSelector) {
        this.rowsSelector = rowsSelector
        this.columnsSelector = columnsSelector
        this.table = document.querySelector(tableSelector)
    }

    generate = () => {
        let tableHTML = ''
        const rowsNumber = parseInt(document.querySelector(this.rowsSelector).value)
        const columnsNumber = parseInt(document.querySelector(this.columnsSelector).value)


        for (let i = 1; i <= rowsNumber; i++) {
            let tr = '<tr>'
            let td = ''

            for (let j = 1; j <= columnsNumber; j++) {

                if (i === 1) {
                    td = `
                        <th class="header">
                            <input class ="header--text" type="text">
                        </th>
                    `;
                }
                else {
                    td = `
                        <td class = "content">
                            <input class ="content--text" type="text">
            
                        </td>
                    `;
                }

                tr += td
            }

            tr += '</tr>'
            tableHTML += tr
        }

        this.table.innerHTML = tableHTML
    }


}

const table = new Table('.table', '.rows', '.columns')

document.querySelector('.button').addEventListener('click', () => {
    table.generate()
});