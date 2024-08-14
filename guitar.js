/*계이름 객체 초기화*/
const pitch = {
    a: [/*프렛, 줄, 옥타브 순 */
        [0, 5, 1],
        [2, 3, 2],
        [5, 1, 3],
        [5, 6, 1],
        [7, 4, 2],
        [10, 2, 3],
        [12, 5, 2]
    ],
    b: [
        [0, 2, 2],
        [2, 5, 1],
        [4, 3, 2],
        [7, 1, 3],
        [7, 6, 1],
        [9, 4, 2],
        [12, 5, 3]
    ],

}


/**특정 행과 열의 배경색을 변경하는 함수 */
function changeCellBackgroundColor(row, col, color) {
    // 테이블 요소 선택
    var table = document.getElementById("guitar");
    
    // 행이 테이블의 범위 내에 있는지 확인
    if (row < table.rows.length) {
        // 특정 행 선택
        var selectedRow = table.rows[row];
        
        // 열이 행의 범위 내에 있는지 확인
        if (col < selectedRow.cells.length) {
            // 특정 셀 선택
            var selectedCell = selectedRow.cells[col];
            
            // 배경색 변경
            selectedCell.style.backgroundColor = color;
        } else {
            console.error("열 인덱스가 범위를 벗어났습니다.");
        }
    } else {
        console.error("행 인덱스가 범위를 벗어났습니다.");
    }
}

for(i=0; i<pitch.a.length; i++){
    changeCellBackgroundColor(pitch.a[i][1], pitch.a[i][0], "red");
}

