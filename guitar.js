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
        [12, 2, 3]
    ],

}


// 색상의 명도를 조정하는 함수
function adjustColorSaturation(color, level) {
    // 명도 비율 설정
    let brightness;
    switch (level) {
        case 1:
            brightness = Math.floor(255/2);
            break;
        case 2:
            brightness = Math.floor(255/3);
            break;
        case 3:
            brightness = Math.floor(0);
            break;
        default:
            brightness = 0;
    }

    // 색상 문자열을 RGB로 변환
    let rgb = hexToRgb(color);
    if (!rgb) return color;

    // 명도 조정
    let adjustedColor = `rgb(${Math.min(255, Math.round(rgb.r + brightness))}, ${Math.min(255, Math.round(rgb.g + brightness))}, ${Math.min(255, Math.round(rgb.b + brightness))})`;
    return adjustedColor;
}

// HEX 색상 문자열을 RGB 객체로 변환하는 함수
function hexToRgb(hex) {
    // HEX 색상 문자열에서 '#' 제거
    hex = hex.replace(/^#/, '');

    // 3자리 HEX 색상 문자열을 6자리로 변환
    if (hex.length === 3) {
        hex = hex.split('').map(char => char + char).join('');
    }

    // RGB 값 추출
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return { r, g, b };
}

/**특정 행과 열의 배경색을 변경하는 함수 */
function changeCellBackgroundColor(row, col, level, color) {
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
            
            // 색상 조정
            var adjustedColor = adjustColorSaturation(color, level);
            
            // 배경색 변경
            selectedCell.style.backgroundColor = adjustedColor;
        } else {
            console.error("열 인덱스가 범위를 벗어났습니다.");
        }
    } else {
        console.error("행 인덱스가 범위를 벗어났습니다.");
    }
}


// 체크박스 상태 변경 이벤트 핸들러
document.getElementById("pitch_A").addEventListener("change", function() {
    if (this.checked) {
        for (let i = 0; i < pitch.a.length; i++) {
            changeCellBackgroundColor(pitch.a[i][1], pitch.a[i][0], pitch.a[i][2], "#FF0000");
        }
    }else{
        for (let i = 0; i < pitch.a.length; i++) {
            changeCellBackgroundColor(pitch.a[i][1], pitch.a[i][0], pitch.a[i][2], "#FFFFFF");
        }
    }
    
});

document.getElementById("pitch_B").addEventListener("change", function() {
    if (this.checked) {
        for (let i = 0; i < pitch.b.length; i++) {
            changeCellBackgroundColor(pitch.b[i][1], pitch.b[i][0], pitch.b[i][2], "#00FF00");
        }
    }else{
        for (let i = 0; i < pitch.b.length; i++) {
            changeCellBackgroundColor(pitch.b[i][1], pitch.b[i][0], pitch.b[i][2], "#FFFFFF");
        }
    }
    
});



