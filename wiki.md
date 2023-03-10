# 1) 네비게이션 바
## 🛫 하단 네비게이션 바

# 2) 홈
## 🛫 splash
YOURTRIP 접속 시 초기 화면이며 일정 시간 후 다음 화면을 출력합니다.   
또는 다른 페이지에서 헤더의 로고 클릭 시 나타납니다. 

## 🛫 로그인
로그인 페이지에서 이메일과 비밀번호를 모두 입력하면 다음 버튼이 활성화됩니다.   
입력하지 않은 입력창이 있다면 다음 버튼은 활성화되지 않습니다.     
이메일 입력 시, 올바른 이메일 형식으로 입력하지 않을 경우 경고 문구가 출력됩니다. 

## 🛫 회원가입
로그인 페이지에서 '이메일로 회원가입'을 클릭하면 회원가입 페이지로 넘어갑니다.   
이메일 입력 시, 올바른 이메일 형식으로 입력하지 않을 경우 경고 문구가 출력됩니다.   
비밀번호는 6자 이상 입력해야하며, 올바른 형식의 이메일과 6자 이상의 비밀번호가 입력되면 다음 버튼이 활성화됩니다.     
다음 버튼을 누를 경우 이메일의 유효성 검사가 진행되며, 만약 이메일이 이미 가입된 계정이라면 경고 문구가 출력됩니다.    

유효성 검사를 통과할 경우 프로필 설정 페이지가 나타납니다.   
프로필 설정 페이지에서는 사용자의 프로필 이미지, 이름, 계정 ID, 소개를 작성할 수 있습니다.   
사용자 이름은 2~10자 이내여야 하며, 계정 ID는 영문, 숫자, 특수문자(.),(_)만 사용 가능하며 유효성 검사를 통해 다른 사용자와 중복될 경우 경고 문구가 출력됩니다.

## 🛫 홈
YOURTRIP 홈에서는 오늘의 추천 테마와 많이 찾는 여행지 리스트, 최근 커뮤니티 글이 '우리의 게시물'로 출력됩니다. 

- [ ] **오늘의 추천 테마**

오늘의 추천은 렌더링 시 랜덤으로 사용자에게 보여줍니다. 이 때, 카테고리는 야경, 자연, 맛집, 행사, 축제 등 다양하게 설정되어 있으며 이를 랜덤으로 보여줍니다.  
테마 이미지는 모바일에서의 터치 스크롤 형태를 사용하여 슬라이드로 구현하였으며 마우스 클릭 후 드래그하여 이미지를 넘겨가며 볼 수 있습니다.    
테마를 선택할 경우 테마의 목록이 보여지며, 목록 내의 장소를 선택할 경우 해당 장소의 디테일 페이지로 넘어갑니다.    

- [ ] **많이 찾는 여행지**

많이 찾는 여행지에서는 전국의 다양한 카테고리를 랜덤으로 보여줍니다.    
장소를 선택할 경우 장소의 디테일 페이지로 넘어가게 됩니다.     

- [ ] **우리의 이야기(커뮤니티)**

커뮤니티에 최근 올라온 글이 순서대로 출력됩니다.    
'우리의 이야기' 타이틀을 클릭하면 커뮤니티 페이지로 넘어가며, 글을 클릭할 경우 해당 게시물로 연결됩니다.    

- [ ] **검색**

홈의 상단바에서 검색 버튼을 누르면 검색 화면이 나타납니다.   
검색창에 검색어를 입력할 경우, 검색어와 일치하는 유저 또는 장소를 화면에 출력합니다.   
검색 결과에서 유저 클릭 시, 해당 유저 프로필로 이동 가능합니다.  
검색 결과에서 장소 클릭 시, 장소 상세 설명 페이지로 이동합니다.   

# 3) 지역별
## 🛫 카테고리   
하단 네비게이션바를 통해 지역별 카테고리로 들어가면 찾고싶은 공간의 종류와 지역을 선택할 수 있는 화면이 나타납니다.   
종류를 선택한 후 지역을 선택하면, 선택한 지역에 해당하는 종류의 여행지를 보여줍니다.    

>`Today`를 선택하면 각 지역의 다양한 테마를 출력합니다. (자연, 힐링, 야경, 역사, 체험 등)   
`Place`를 선택하면 각 지역의 다양한 여행지를 랜덤으로 출력합니다.    
`Restaurant`를 선택하면 각 지역의 식당을 랜덤으로 출력합니다.   
`Cafe`를 선택하면 각 지역의 카페를 랜덤으로 출력합니다.    

## 🛫 여행지 리스트 
카테고리를 선택하면 그에 해당하는 여행지 리스트를 출력합니다.   
장소를 선택하면 해당 장소의 상세 설명 페이지로 들어갑니다.  

## 🛫 여행지 상세 설명 페이지
선택된 여행지에 대한 상세 설명 페이지에서는 여행지에 대한 설명, 주변의 가볼만한 곳, 사용자들이 해당 장소에 대해 남긴 댓글, 여행지 위치 지도 및 주소가 보여집니다.   
탭바를 이용하여 궁금한 내용의 카테고리를 선택하면 그에 해당하는 결과물을 출력합니다. 

- [ ] 여행지에 대한 설명   

여행지의 대략적인 위치와 해당 여행지의 종류, 여행지에 대한 자세한 설명을 출력합니다.  

- [ ] 주변 가볼만한 곳   

해당 여행지의 위치를 통해 주변의 볼거리, 식당, 카페를 랜덤으로 추천합니다.   

- [ ] 사용자 댓글   

여행지에 대한 댓글을 남기는 것이 가능합니다. 여행지에 다녀온 사용자가 남기는 후기와 같이 사용자들은 다양하게 댓글을 남길 수 있습니다. 
본인이 쓴 댓글이라면 수정, 삭제가 가능하며, 타인의 댓글의 더보기 버튼을 클릭할 시 신고하기 모달이 출력됩니다.

- [ ] 지도    

카카오맵 API를 사용하여 해당 여행지의 위치를 지도에 출력합니다. 


# 4) 커뮤니티

## 🛫 커뮤니티 페이지
하단 네비게이션 바에서 커뮤니티를 클릭하면 표시되는 페이지입니다.   
YOURTRIP의 모든 사용자들이 올린 게시물이 출력됩니다.   
상단바의 더보기 버튼을 통해 내가 작성한 글을 확인하는 것이 가능합니다. 내가 작성한 글만 모아 리스트로 출력됩니다.  
게시물을 클릭할 시, 게시물 상세 페이지로 넘어갑니다.  

## 🛫 게시물 상세 페이지
사용자들이 글린 올을 클릭 시, 보여지는 페이지입니다. 
게시물을 작성한 사용자의 프로필 이미지와 계정 이름, ID, 게시한 날짜를 확인할 수 있습니다. 
이미지가 있을 경우 함께 출력하며, 이미지가 여러 개일 경우 이미지를 클릭하여 다음 이미지를 확인하는 것이 가능합니다.       
좋아요를 누를 수 있으며 댓글을 남기는 것이 가능해 유저들과 소통이 가능합니다. 
게시글을 올린 유저의 프로필을 클릭하면 해당 유저의 프로필로 넘어가며 유저의 큐레이션 리스트, 저장한 공간, 팔로우가 가능합니다.    

## 🛫 게시물 작성
사용자가 로그인 되어있을 경우, 우측 하단에 글쓰기 버튼이 나타납니다.


-----------
## 🛫 게시물 상세 페이지

하단 메뉴바에서 게시물 작성 을 클릭하면 표시되는 페이지 입니다.
글이 입력되거나 사진이 업로드 되면 업로드 버튼이 활성화되고, 버튼을 누르면 게시물이 업로드됩니다.
내가 작성한 게시글은 마이프로필 하단에 나타납니다.
사진은 우측 하단 버튼을 클릭하면 업로드할 수 있으며, 최대 3장까지 업로드 가능합니다.
## 🛫 게시물 상세
게시물 하단 말풍선 아이콘을 클릭하면 나오는 페이지로, 댓글을 확인하고 입력할 수 있는 상세 페이지 입니다.
댓글 입력창에 텍스트를 입력하면 게시 버튼이 활성화되고, 게시 버튼을 클릭하면 댓글이 추가됩니다.
## 🛫 게시물 수정, 신고, 삭제
게시물, 댓글 각각 우측 상단에 위치한 버튼을 클릭했을 경우 모달 메뉴가 표시됩니다.
내가 작성한 게시물일 경우 : 삭제, 수정 버튼이 나타납니다.
다른 사용자가 작성한 게시물일 경우 : 신고 버튼이 나타납니다.
내가 작성한 댓글일 경우 : 삭제 버튼이 나타납니다.
다른 사용자가 작성한 댓글일 경우 : 신고 버튼이 나타납니다.
## 🛫 댓글 신고, 삭제
댓글에 있는 모달 버튼을 클릭했을 경우 모달 메뉴가 표시됩니다.
내가 작성한 댓글인 경우 삭제 버튼이 나타납니다.
다른 사용자가 작성한 댓글인 경우 신고 버튼이 나타납니다.


# 3) 프로필
## 🛫 마이 프로필
하단 네비게이션의 프로필 클릭시 나의 프로필을 확인할 수 있습니다.
사용자 프로필 이미지, 사용자 이름, 계정 ID, 소개, 팔로워 및 팔로잉 수, 그리고 내가 업로드한 큐레이션을 확인할 수 있습니다.
팔로워 및 팔로잉 수 클릭시 팔로워, 팔로우 유저 리스트를 확인할 수 있습니다.
제작된 큐레이션 확인과 추가 제작이 가능합니다.
아직 업로드 된 큐레이션이 없을 경우 만들기 버튼이 표시됩니다.

## 🛫 유저 프로필
하단 네비게이션의 홈, 지역별, 커뮤니티에서 유저 검색이 가능합니다. 또한 커뮤니티의 게시물 클릭시 작성자 프로필 페이지로 이동합니다.
사용자 프로필 이미지, 사용자 이름, 계정 ID, 소개, 팔로워 및 팔로잉 수, 그리고 유저가 업로드한 큐레이션을 확인할 수 있습니다.
팔로워 및 팔로잉 수 클릭시 팔로워, 팔로우 유저 리스트를 확인할 수 있습니다.
제작된 큐레이션 확인이 가능합니다.
아직 업로드된 큐레이션이 없을 경우 표시되지 않습니다.

## 🛫 팔로워 및 팔로잉
사용자 프로필 페이지에서 팔로워 및 팔로잉 수를 클릭하면 나타나는 페이지입니다.
목록은 사용자 프로필 사진, 이름, 계정 ID, 팔로우(또는 취소) 버튼으로 구성됩니다.
팔로워 페이지
내가 팔로우 한 사용자일 경우 팔로우 취소 버튼이 표시됩니다.
내가 팔로우 하지 않은 사용자일 경우에는 팔로우 버튼이 표시됩니다.
팔로잉 페이지
팔로잉한 사용자를 언팔로우 할 수 있습니다.
해당 유저를 클릭하면 유저 프로필 페이지로 이동합니다.

-----

## 🛫 프로필 수정
프로필 수정 버튼을 누르면 나타나는 페이지입니다.
사용자 프로필 이미지, 사용자 이름, 계정 ID, 소개를 수정 할 수 있는 페이지 입니다. 
저장 버튼을 누르면 수정된 프로필이 반영됩니다.ㄱ

 
## 🛫 큐레이션
큐레이션 만들기 버튼이나 + 버튼을 누르면 나타나는 큐레이션 업로드 페이지입니다.
나만의 테마를 만드는 페이지입니다.
큐레이션 제목, 소개, 선택한 여행지를 작성할 수 있습니다.
선택한 여행지에 있는 + 버튼을 누르면 장소를 검색하여 추가할 수 있습니다.


## 🛫 로그아웃
리워드 페이지와 프로필 페이지 우측 상단에 있는 메뉴 버튼을 클릭하면 모달 메뉴가 표시됩니다.
모달 메뉴의 로그아웃을 클릭하면 ‘로그아웃하시겠어요?’ 라는 확인문구가 나타나며 로그아웃 버튼을 클릭할 경우 로그아웃되어 초기 스플래시 화면으로 이동합니다.
