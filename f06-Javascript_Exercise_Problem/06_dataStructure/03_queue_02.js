/* 

    queue 는 선입선출 특성을 가지는 자료구조 입니다.
    제일 먼저 들어온 데이터가 먼저 나가며
    제일 나중에 들어온 데이터는 제일 마지막에 나가는 구조를 가집니다.

    놀이공원에 놀러갔을 때 순서대로 줄을 서서 놀이기구를 탄다거나,
    은행에 가서 대기표를 발급받은 순서대로 업무를 보는 등이
    queue 에 해당하는 구조를 가집니다.

    데이터가 들어가는 과정을 Enqueue 라고 하며,
    데이터가 나가는 과정을 Dequeue 라고 합니다.

    ----

    문제
    
    Junny 는 Hoony 와 함께 놀이공원을 찾았습니다.
    이 놀이공원에는 매우 유명한 롤러코스터가 하나 있는데
    인기가 매우 많아 대기줄이 매우 긴편입니다.

    Jonny 는 Hoony 함께 이 롤러코스터를 타고 싶지만
    이 롤러코스터에는 한번 탈 때에 탑승할 수 있는 인원이 제한되어 있기 때문에
    Hoony 와 한 열차에 탈 때까지 줄을 기다리려 합니다.

    현재 대기열을 나타내는 2차원 배열 queueArr 가 매개변수로 주어지고
    한 열차에 탑승할 수 있는 인원이 limit 로 주어졌을 때
    Jonny 와 Hoony 가 몇 차례만에 함께 열차를 탈 수 있는지 리턴해주세요.


    예시 ) 만약, queueArr 에
    [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ] 가 주어지고
    limit 매개변수로 4 가 주어지게 될 때

    첫번째 차례에는 [1, 2, 3, 4] 에 해당되는 인원들이 탑승할 수 있고
    두번째 차례에는 [5, 6, 7, "Junny"] 에 해당되는 인원이 탑승할 수 있습니다.

    하지만 Junny 는 Hoony 와 함께 탑승하기를 원하기 때문에
    자신의 자리를 뒷자리에 있는 8 에게 양보하게 되고
    이때 [5, 6, 7, 8] 에 해당하는 인원들이 롤러코스터에 탑승합니다.

    다음 세번째 차례에 비로소 Junny 와 Hoony 가 함께 한 열차에 탑승하게 되므로
    이때는 세번째 차례인 3 이 리턴됩니다.


    !! 숫자 데이터를 담는 2차원 배열은 같은 그룹을 나타냅니다.
    !! Junny 와 Hoony 는 반드시 같은 배열 안에 포함되어 있습니다.
    !! Junny 와 Hoony 는 반드시 같은 열차에 탑승해야 합니다.
    !! Junny 는 항상 Hoony 보다 앞에 있습니다.
    !! limit 는 최소 2 이상의 수부터 주어집니다.

    ----

    입력 예시

    1. queue_02(
      [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
      4
    )

    2. queue_02(
      [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
      100
    )

    3. queue_02(
      [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
      3
    )

    4. queue_02(
      [ [1, 2, 3], [4, 5], [6, 7], ["Junny", "Hoony"], [8] ], 
      2
    )

    
    ----

    출력 예시

    1.  3
    
    2.  1

    3.  3
    
    4.  5

*/

function queue_02 (queueArr, limit) {
	// 여기에 코드를 작성하세요.

}

module.exports = queue_02;