
![sport centre (1)](https://user-images.githubusercontent.com/108918319/193982219-1d35c2b1-5de5-413a-9dcc-1fcc3d9f7675.png)
<br/>
# WeeklyRun
<a href="https://weeklyrun.com">Home Page</a> / <a href="https://www.youtube.com/watch?v=wmHWVBSeeHE">Youtube</a>
<br/>
런닝을 하고 싶은데 동기부여가 있으면 좋겠나요?<br/>
한 주간의 목표를 세우고 매일매일 기록을 확인하며<br/>
유저들과 피드를 공유해보세요!

# 주요기능
### 1. 로그인
* 접근성을 높이기 위해 네이버 와 카카오를 활용한 소셜로그인으로 간편하게 로그인 가능합니다.
### 2. 목표 설정하기
* 한 주간의 목표를 설정하고, 하루하루의 기록을 볼 수 있으며 , 일주일 마다 월요일 기준으로 목표를 초기화합니다.  
### 3. 런닝 기록하기
* 실시간 위치를 기반으로 런닝을 추적하며 기록 및 피드를 통해 공유할 수 있습니다.
### 4. 피드
* 최신순 및 좋아요 순으로 정렬하여 볼 수 있습니다.
* 좋아요 및 댓글, 대댓글을 이용할 수 있습니다.
### 5. 검색하기
* 해시태그 및 유저 이름을 추천 검색어 및 자동완성 기능을 이용하여 검색하고 해당 유저의 피드 페이지를 확인 할 수 있습니다.
### 6. 댓글페이지
* 댓글을 입력 할 수 있으며, 슬라이드를 이용하여 수정 및 삭제 가 가능합니다.
### 7. 주간 랭킹 기능
일주일간 달린 거리를 기준으로 상위 5명의 프로필, 달린 거리, 시간 등을 볼 수 있으며, 나의 랭킹 순위도 확인할 수 있습니다.
### 8. 신고하기 기능
* 부적절한 게시글 을 신고 하거나, 이용중에 발생한 문제에 관해 신고할 수 있는 별도의 페이지가 존재합니다.


# 기술스택
<div align="center">
  <img src="https://img.shields.io/badge/Nodejs-E34F26?style=for-the-badge&logo=Nodejs&logoColor=white"> 
  <img src="https://img.shields.io/badge/express-1572B6?style=for-the-badge&logo=express3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/sequelize-61DAFB?style=for-the-badge&logo=sequelize&logoColor=black"> 
  <br/>
  <img src="https://img.shields.io/badge/Mysql-FF4154?style=for-the-badge&logo=Mysql&logoColor=black"> 
  <img src="https://img.shields.io/badge/jwt-61DAFB?style=for-the-badge&logo=jwt&logoColor=black"> 
  <img src="https://img.shields.io/badge/pm2-DB7093?style=for-the-badge&logo=pm2&logoColor=white"> 
  
   <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> 
   <img src="https://img.shields.io/badge/Jenkins-181717?style=for-the-badge&logo=Jenkins&logoColor=white"> 
</div>


# 아키텍처 
![image02](https://user-images.githubusercontent.com/108918319/193979846-1da1a6da-c710-4cd4-ad75-5238cc8c3066.png)

# ERD
![image](https://user-images.githubusercontent.com/58474431/193502539-51cb4273-d864-4c35-82f5-0cf6aaeefaaf.png)


# API 명세서
<h1><a href="https://www.notion.so/17544d313260490eb624d492043543bd?v=7f8015cd1630416891e480ad19a586a9"># API 명세서<a></h1>

# 트러블 슈팅 - Backend
<details>
  <summary> Elastic Beanstalk 사용시 .env 파일을 서버 내부에 작성 할 수 있는 방법이 없음. </summary>
  <div markdown="1">

    해결방안 : 이전에 계획한 Plan A 방법에서 Plan B 방법으로 우회 해결
Plan A : Jenkins → S3 → EB( ELB, autoscailing) → 인스턴스배포
    <br/>
Plan B : Jenkins → projectserver 배포  (S3는 jenkins 와 연계되지 않고 따로)
    
  </div>
</details>
<details>
  <summary> 서버 한개로 Jenkins cicd 작업중 permission  error로 인해 서버 작동 불가 </summary>
  <div markdown="1">
   
      해결방안 : 서버 인스턴스 갯수를 defalut 2개로 프로젝트 서버와 jenkins 전용서버 나누어 설계 함으로 문제 해결
    
  </div>
</details>

</div>
</details>
<details>
  <summary> 유저 탈퇴시 댓글, 대댓글 수가 제대로 카운트 되지 않는 문제 발생 </summary>
  <div markdown="1">
    게시글 페이지와, 댓글 페이지에서 댓글이나 대댓글을 작성한 유저가 탈퇴시,
    댓글, 대댓글 갯수를 카운팅하는 옵션 값에서 탈퇴한 유저가 작성했던 카운트 데이터가 삭제되지 않음
   
      해결방안 : 코드 유저 탈퇴 디렉토리에서 유저 탈퇴시 탈퇴한 유저의 카운팅 값을 없애주는 로직 구현으로 문제 해결
    
  </div>
</details>




# 트러블 슈팅 - Frontend
<details>
  <summary>위치를 불러오는 함수와 시간 타이머 함수를 시작 버튼 ,정지 버튼 및 종료 버튼을 이용하여 제어할 수 있어야하며, 일정한 시간 간격으로 함수가 작동해야함</summary>
  <div markdown="1">

    useInterval 커스텀 훅을 사용하여, callback 함수와 delay를 파라미터로 넘겨 delay가 null일 경우 함수가 중단됨
     자세한 내용은 https://velog.io/@dae_eun2/React-useInterval 에서 확인 가능합니다.
    
  </div>
</details>
<details>
  <summary>검색어 입력시 불필요한 요청 및 상태변화가 일어남 </summary>
  <div markdown="1">
    
      검색 인풋에 글씨가 입력될때마다 요청이 간다면 불필요한 요청이 생길뿐만아니라 과도한 요청이 발생할 수가 있음 
      debounce 훅을 만들어서 , value와 delay를 파라미터로 받으며, <br/>setTimeout을 이용하여 일정 시간 동안의 이벤트 발생을 무효화시켜
      change되는 value값의 시간 텀을 조정하여 사용
    
  </div>
</details>
<details>
  <summary>게시글 수정에서 이미지 변경시 데이터 타입에 관한 에러 발생</summary>
  <div markdown="1">
    업로드 이미지를 blob타입으로 백엔드에 넘겨주는데, 기존 이미지는 string타입으로 url주소로 받음 <br />
    기존이미지를 blob타입으로 변경 하여 줄 수가 없어, 기존 이미지를 수정하는것에대한 문제가 발생함 <br />
    
      해결방안 
      백엔드에 prevImage와 newImage를 별도로 전송하여 백엔드측에서 newImage를 업로드 후, prevImage로 합치게끔 하여 문제 해결
    
  </div>
</details>


# 팀원
|팀원 |깃허브 주소| 역할 분담|
|-----|-----|------|
|금윤성 | https://github.com/rmadbstjd   | 유저, 기록좌표, 게시글, 랭킹, 노드 메일링, 검색, 태그 기능, 배포, S3 이미지 저장, 페이지무한스크롤 |
|신성규 |  https://github.com/sinsk23  | 댓글, 대댓글, 로깅(winston, morgon), CICD : Jenkins , 페이지무한스크롤|
|김대석 |  https://github.com/SkyWind4225   | 카카오로그인, 네이버로그인 |

프론트엔드 Github : https://github.com/HangHae99-Class8-FinalProject/WeeklyRun-FE

