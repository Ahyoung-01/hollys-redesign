const menuData = {
  drink: {
    title: "음료",
    subTabs: [
      "전체",
      "COFFEE",
      "라떼 · 초콜릿 · 티",
      "할리치노 · 빙수",
      "스무디 · 주스",
      "스파클링"
    ],
    items: [
      {
        name: "두쫀크 아인슈페너",
        category: "COFFEE",
        image: "img/drink01.png",
        isNew: true,
        desc: [
          "· 두바이st 피스타치오 크림 아인슈페너",
          "· Regular 354ml 기준",
          "· 칼로리(ICED) : 176kcal",
          "· 당류 : 8g / 단백질 : 2g",
          "· 포화지방 : 7.5g / 나트륨 : 23mg",
          "· 카페인 : 127mg"
        ]
      },
      {
        name: "두쫀크 돌체라떼",
        category: "COFFEE",
        image: "img/drink02.png",
        isNew: true,
        desc: [
          "· 커피 카테고리 신메뉴",
          "· 두바이 스타일 콘셉트 메뉴",
          "· 상세 영양정보는 실제 상세페이지 연결 권장"
        ]
      },
      {
        name: "저당 바닐라 딜라이트",
        category: "COFFEE",
        image: "img/drink03.png",
        desc: [
          "· 할리스 대표 바닐라 딜라이트 라인",
          "· 저당 타입 메뉴"
        ]
      },
      {
        name: "바닐라 딜라이트 아인슈페너",
        category: "COFFEE",
        image: "img/drink04.png",
        desc: [
          "· 바닐라 딜라이트 베이스",
          "· 아인슈페너 스타일 메뉴"
        ]
      },
      {
        name: "디카페인 콜드브루 저당 바닐라 딜라이트",
        category: "COFFEE",
        image: "img/drink05.png",
        desc: [
          "· 디카페인 콜드브루 사용",
          "· 저당 바닐라 딜라이트 타입"
        ]
      },
      {
        name: "유자리카노",
        category: "COFFEE",
        image: "img/drink06.png",
        desc: [
          "· 유자와 커피를 조합한 메뉴",
          "· 시그니처성 있는 커피 음료"
        ]
      },
      {
        name: "아샷추",
        category: "COFFEE",
        image: "img/drink07.png",
        desc: [
          "· 아이스티 + 샷 조합",
          "· 할리스 커피 카테고리 등록 메뉴"
        ]
      },
      {
        name: "아메리카노",
        category: "COFFEE",
        image: "img/drink08.png",
        desc: [
          "· 할리스 기본 커피 메뉴",
          "· 가장 대표적인 에스프레소 베이스"
        ]
      },

      {
        name: "미피의 애플망고 라떼",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink09.png",
        isNew: true,
        desc: [
          "· 시즌/협업성 메뉴",
          "· 애플망고 베이스 라떼"
        ]
      },
      {
        name: "두쫀크 초코라떼",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink10.png",
        isNew: true,
        desc: [
          "· 초코 라떼 타입 시즌 메뉴",
          "· 두쫀크 시리즈"
        ]
      },
      {
        name: "아이스티",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink11.png",
        desc: [
          "· 라떼 · 초콜릿 · 티 분류에 등록",
          "· 가볍게 즐기는 티 메뉴"
        ]
      },
      {
        name: "딸기 라떼",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink12.png",
        desc: [
          "· 과일 라떼 타입 메뉴",
          "· 달콤한 딸기 풍미"
        ]
      },
      {
        name: "제주 레몬 애플티",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink13.png",
        desc: [
          "· 제주 레몬과 사과 조합",
          "· 과일티 계열 메뉴"
        ]
      },
      {
        name: "로얄 밀크 버블티",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink14.png",
        desc: [
          "· 밀크티 + 펄 조합",
          "· 할리스 버블티 메뉴"
        ]
      },
      {
        name: "로얄 밀크티 라떼",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink15.png",
        desc: [
          "· 향긋한 밀크티 라떼",
          "· 부드러운 우유 베이스"
        ]
      },
      {
        name: "핫/아이스초코",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink16.png",
        desc: [
          "· 초콜릿 음료",
          "· 핫/아이스 선택형"
        ]
      },
      {
        name: "화이트초코",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink17.png",
        desc: [
          "· 화이트 초콜릿 베이스",
          "· 달콤한 라떼형 음료"
        ]
      },
      {
        name: "유자 캐모마일",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink18.png",
        desc: [
          "· 유자와 허브티 조합",
          "· 산뜻한 티 메뉴"
        ]
      },
      {
        name: "복숭아 얼그레이",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink19.png",
        desc: [
          "· 복숭아 향 + 얼그레이",
          "· 향긋한 과일 티"
        ]
      },
      {
        name: "해남 녹차",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink20.png",
        desc: [
          "· 녹차 티 메뉴",
          "· 깔끔한 풍미"
        ]
      },
      {
        name: "페퍼민트",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink21.png",
        desc: [
          "· 허브티 메뉴",
          "· 시원한 향"
        ]
      },
      {
        name: "캐모마일",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink22.png",
        desc: [
          "· 은은한 허브티",
          "· 부드러운 향"
        ]
      },
      {
        name: "얼그레이",
        category: "라떼 · 초콜릿 · 티",
        image: "img/drink23.png",
        desc: [
          "· 클래식 홍차 메뉴",
          "· 베르가못 향"
        ]
      },

      {
        name: "두바이st. 빠작 초코 파르페",
        category: "할리치노 · 빙수",
        image: "img/drink24.png",
        isNew: true,
        desc: [
          "· 할리치노 · 빙수 카테고리 등록 메뉴",
          "· 초코 디저트 타입"
        ]
      },
      {
        name: "더블 초코칩 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink25.png",
        desc: [
          "· 초코칩 블렌디드 메뉴",
          "· 할리스 대표 할리치노 라인"
        ]
      },
      {
        name: "제주 말차 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink26.png",
        desc: [
          "· 말차 베이스 할리치노",
          "· 진한 녹차 풍미"
        ]
      },
      {
        name: "콜드브루 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink27.png",
        desc: [
          "· 콜드브루 커피 블렌디드",
          "· 커피 타입 할리치노"
        ]
      },
      {
        name: "민트 초코칩 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink28.png",
        desc: [
          "· 민트와 초코칩 조합",
          "· 시원한 블렌디드 메뉴"
        ]
      },
      {
        name: "딸기 치즈케익 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink29.png",
        desc: [
          "· 딸기와 치즈케이크 풍미",
          "· 디저트형 할리치노"
        ]
      },
      {
        name: "플레인 요거트 할리치노",
        category: "할리치노 · 빙수",
        image: "img/drink30.png",
        desc: [
          "· 요거트 베이스 블렌디드",
          "· 산뜻한 맛"
        ]
      },

      {
        name: "오렌지 자몽 생과일 주스",
        category: "스무디 · 주스",
        image: "img/drink31.png",
        desc: [
          "· 생과일 주스 타입",
          "· 상큼한 시트러스 조합"
        ]
      },
      {
        name: "토마토 생과일 주스",
        category: "스무디 · 주스",
        image: "img/drink32.png",
        desc: [
          "· 토마토 베이스 생과일 주스",
          "· 깔끔한 음용감"
        ]
      },
      {
        name: "피치 딸기 블렌디드",
        category: "스무디 · 주스",
        image: "img/drink33.png",
        desc: [
          "· 복숭아 + 딸기 조합",
          "· 블렌디드 타입"
        ]
      },
      {
        name: "애플망고 스무디",
        category: "스무디 · 주스",
        image: "img/drink34.png",
        desc: [
          "· 망고 스무디 메뉴",
          "· 진한 과일 풍미"
        ]
      },
      {
        name: "딸기 스무디",
        category: "스무디 · 주스",
        image: "img/drink35.png",
        desc: [
          "· 대표 과일 스무디",
          "· 달콤한 딸기 베이스"
        ]
      },
      {
        name: "사과 비트 착즙 주스",
        category: "스무디 · 주스",
        image: "img/drink36.png",
        desc: [
          "· 착즙 주스 메뉴",
          "· 사과와 비트 조합"
        ]
      },
      {
        name: "오렌지 당근 착즙 주스",
        category: "스무디 · 주스",
        image: "img/drink37.png",
        desc: [
          "· 오렌지 + 당근 착즙",
          "· 상큼하고 깔끔한 맛"
        ]
      },
      {
        name: "청포도 케일 착즙 주스",
        category: "스무디 · 주스",
        image: "img/drink38.png",
        desc: [
          "· 청포도와 케일 조합",
          "· 착즙 주스 타입"
        ]
      },

      {
        name: "서울 오로라 스파클링",
        category: "스파클링",
        image: "img/drink39.png",
        desc: [
          "· 스파클링 카테고리 등록 메뉴",
          "· 시즌성 시그니처 메뉴"
        ]
      },
      {
        name: "레몬에이드",
        category: "스파클링",
        image: "img/drink40.png",
        desc: [
          "· 탄산 베이스 에이드",
          "· 상큼한 레몬 풍미"
        ]
      },
      {
        name: "유자몽 스파클링",
        category: "스파클링",
        image: "img/drink41.png",
        desc: [
          "· 유자 + 자몽 스파클링",
          "· 산뜻한 탄산감"
        ]
      },
      {
        name: "복숭아 자두 스파클링",
        category: "스파클링",
        image: "img/drink42.png",
        desc: [
          "· 복숭아와 자두 조합",
          "· 달콤한 과일 스파클링"
        ]
      },
      {
        name: "청포도 스파클링",
        category: "스파클링",
        image: "img/drink43.png",
        desc: [
          "· 청포도 베이스",
          "· 시원한 탄산 음료"
        ]
      }
    ]
  },

  food: {
    title: "푸드",
    subTabs: ["전체", "케이크", "샌드위치", "베이커리", "디저트"],
    items: [
      {
        name: "피치 플라워 케이크",
        category: "케이크",
        image: "img/food01.png",
        isNew: true,
        desc: ["· 푸드 카테고리 등록 케이크 메뉴"]
      },
      {
        name: "미피 망고 생크림 케이크",
        category: "케이크",
        image: "img/food02.png",
        desc: ["· 시즌/협업성 케이크 메뉴"]
      },
      {
        name: "미피 말차 슈크림 케이크",
        category: "케이크",
        image: "img/food03.png",
        desc: ["· 말차 크림 계열 케이크"]
      },
      {
        name: "밀크 크레이프",
        category: "케이크",
        image: "img/food04.png",
        desc: ["· 부드러운 레이어 타입 케이크"]
      },
      {
        name: "딸기 쉬폰 케이크",
        category: "케이크",
        image: "img/food05.png",
        desc: ["· 쉬폰 타입 딸기 케이크"]
      },
      {
        name: "딸기 생크림 케이크",
        category: "케이크",
        image: "img/food06.png",
        desc: ["· 대표 생크림 케이크 메뉴"]
      },
      {
        name: "잉글리시 머핀 샌드위치",
        category: "샌드위치",
        image: "img/food07.png",
        desc: ["· 브런치형 샌드위치 메뉴"]
      },
      {
        name: "베이컨 크루아상 샌드위치",
        category: "샌드위치",
        image: "img/food08.png",
        desc: ["· 크루아상 베이스 샌드위치"]
      },
      {
        name: "B.E.L.T 샌드위치",
        category: "샌드위치",
        image: "img/food09.png",
        desc: ["· 베이컨·에그·레터스·토마토 조합"]
      },
      {
        name: "플랜트 풀드포크 샌드위치",
        category: "샌드위치",
        image: "img/food10.png",
        desc: ["· 플랜트 타입 샌드위치"]
      },
      {
        name: "플랜트 크랜베리 치킨 샌드위치",
        category: "샌드위치",
        image: "img/food11.png",
        desc: ["· 크랜베리 풍미 샌드위치"]
      },
      {
        name: "닭가슴살 프레시 샌드위치",
        category: "샌드위치",
        image: "img/food12.png",
        desc: ["· 가볍게 즐기기 좋은 샌드위치"]
      },
      {
        name: "겉바속쫀 버터떡 (2개입)",
        category: "베이커리",
        image: "img/food13.png",
        desc: ["· 쫀득한 식감의 베이커리 메뉴"]
      },
      {
        name: "두바이 쫀득 초코식빵",
        category: "베이커리",
        image: "img/food14.png",
        desc: ["· 초코 풍미 식빵 메뉴"]
      },
      {
        name: "소금빵",
        category: "베이커리",
        image: "img/food15.png",
        desc: ["· 기본 베이커리 메뉴"]
      },
      {
        name: "모카번 베이글",
        category: "베이커리",
        image: "img/food16.png",
        desc: ["· 베이글 타입 베이커리"]
      },
      {
        name: "화이트 마카다미아 쿠키",
        category: "디저트",
        image: "img/food17.png",
        desc: ["· 쿠키 디저트 메뉴"]
      },
      {
        name: "레몬 마들렌",
        category: "디저트",
        image: "img/food18.png",
        desc: ["· 상큼한 마들렌"]
      },
      {
        name: "말차 마들렌",
        category: "디저트",
        image: "img/food19.png",
        desc: ["· 말차 풍미 디저트"]
      },
      {
        name: "초코 마들렌",
        category: "디저트",
        image: "img/food20.png",
        desc: ["· 초콜릿 마들렌"]
      }
    ]
  },

  md: {
    title: "MD",
    subTabs: ["전체", "MD상품", "MD식품"],
    items: [
      {
        name: "올데이 텀블러 (메탈)",
        category: "MD상품",
        image: "img/md01.png",
        desc: ["· MD상품 카테고리 등록 텀블러"]
      },
      {
        name: "올데이 텀블러 (레드)",
        category: "MD상품",
        image: "img/md02.png",
        desc: ["· 컬러 옵션 텀블러"]
      },
      {
        name: "올데이 텀블러 (크림)",
        category: "MD상품",
        image: "img/md03.png",
        desc: ["· 컬러 옵션 텀블러"]
      },
      {
        name: "한복 할리베어 키링 (선비)",
        category: "MD상품",
        image: "img/md04.png",
        desc: ["· 캐릭터 키링 상품"]
      },
      {
        name: "한복 할리베어 키링 (꼬마아씨)",
        category: "MD상품",
        image: "img/md05.png",
        desc: ["· 캐릭터 키링 상품"]
      },
      {
        name: "한복 할리베어 키링 (꼬마도령)",
        category: "MD상품",
        image: "img/md06.png",
        desc: ["· 캐릭터 키링 상품"]
      },
      {
        name: "핸디 라운드 텀블러 (초코요정 춘식)",
        category: "MD상품",
        image: "img/md07.png",
        desc: ["· 협업 텀블러 상품"]
      },
      {
        name: "실리콘 핸들 티 텀블러 (요정 춘식)",
        category: "MD상품",
        image: "img/md08.png",
        desc: ["· 티 텀블러 타입 상품"]
      },
      {
        name: "더 가벼운 텀블러(퍼플)",
        category: "MD상품",
        image: "img/md09.png",
        desc: ["· 경량 텀블러 상품"]
      },
      {
        name: "더 가벼운 텀블러(브라운)",
        category: "MD상품",
        image: "img/md10.png",
        desc: ["· 경량 텀블러 상품"]
      },
      {
        name: "시그니처 아메리카노 미니10T",
        category: "MD식품",
        image: "img/md11.png",
        desc: ["· 스틱커피 타입 MD식품"]
      },
      {
        name: "디카페인 아메리카노 미니 30T",
        category: "MD식품",
        image: "img/md12.png",
        desc: ["· 디카페인 스틱커피"]
      },
      {
        name: "헤이즐넛 아메리카노 12T",
        category: "MD식품",
        image: "img/md13.png",
        desc: ["· 향미 스틱커피"]
      },
      {
        name: "카페 라떼 10T",
        category: "MD식품",
        image: "img/md14.png",
        desc: ["· 라떼 타입 MD식품"]
      },
      {
        name: "바닐라 딜라이트 10T",
        category: "MD식품",
        image: "img/md15.png",
        desc: ["· 할리스 시그니처 MD식품"]
      },
      {
        name: "돌체 라떼 10T",
        category: "MD식품",
        image: "img/md16.png",
        desc: ["· 달콤한 라떼 타입"]
      },
      {
        name: "(캡슐) 시그니처 블렌드 10개입",
        category: "MD식품",
        image: "img/md17.png",
        desc: ["· 캡슐 커피 상품"]
      },
      {
        name: "시그니처 드립백",
        category: "MD식품",
        image: "img/md18.png",
        desc: ["· 드립백 커피 상품"]
      },
      {
        name: "데이드림 드립백",
        category: "MD식품",
        image: "img/md19.png",
        desc: ["· 드립백 커피 상품"]
      },
      {
        name: "하트파이",
        category: "MD식품",
        image: "img/md20.png",
        desc: ["· 스낵형 MD식품"]
      }
    ]
  }
};

const state = {
  main: "drink",
  sub: "전체",
  page: 1,
  perPage: 8
};

const mainTabs = document.querySelectorAll(".main-tab a");
const menuTitle = document.getElementById("menuTitle");
const menuSubTab = document.getElementById("menuSubTab");
const menuGrid = document.getElementById("menuGrid");
const menuPagination = document.getElementById("menuPagination");

function getCurrentItems() {
  const current = menuData[state.main];
  if (state.sub === "전체") return current.items;
  return current.items.filter(item => item.category === state.sub);
}

function renderSubTabs() {
  const current = menuData[state.main];

  menuSubTab.innerHTML = current.subTabs.map(tab => `
    <button class="${state.sub === tab ? "active" : ""}" data-sub="${tab}">${tab}</button>
  `).join("");

  const subBtns = menuSubTab.querySelectorAll("button");
  subBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      state.sub = btn.dataset.sub;
      state.page = 1;
      renderAll();
    });
  });
}

function renderGrid() {
  const items = getCurrentItems();
  const start = (state.page - 1) * state.perPage;
  const pagedItems = items.slice(start, start + state.perPage);

  if (pagedItems.length === 0) {
    menuGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; font-size:18px;">등록된 메뉴가 없습니다.</p>`;
    return;
  }

  menuGrid.innerHTML = pagedItems.map(item => `
    <div class="menu-card">
      <div class="menu-thumb">
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-hover">
          <h4>${item.name}</h4>
          <div class="line"></div>
          ${item.desc.map(text => `<p>${text}</p>`).join("")}
        </div>
      </div>

      <p class="menu-name">${item.name}</p>
    </div>
  `).join("");
}

function renderPagination() {
  const items = getCurrentItems();
  const totalPage = Math.ceil(items.length / state.perPage);

  if (totalPage <= 1) {
    menuPagination.innerHTML = "";
    return;
  }

  let html = `<button class="prev" ${state.page === 1 ? "disabled" : ""}>&lt;</button>`;

  for (let i = 1; i <= totalPage; i++) {
    html += `<button class="${state.page === i ? "active" : ""}" data-page="${i}">${i}</button>`;
  }

  html += `<button class="next" ${state.page === totalPage ? "disabled" : ""}>&gt;</button>`;

  menuPagination.innerHTML = html;

  const pageBtns = menuPagination.querySelectorAll("button[data-page]");
  const prevBtn = menuPagination.querySelector(".prev");
  const nextBtn = menuPagination.querySelector(".next");

  pageBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      state.page = Number(btn.dataset.page);
      renderGrid();
      renderPagination();
    });
  });

  prevBtn?.addEventListener("click", () => {
    if (state.page > 1) {
      state.page--;
      renderGrid();
      renderPagination();
    }
  });

  nextBtn?.addEventListener("click", () => {
    if (state.page < totalPage) {
      state.page++;
      renderGrid();
      renderPagination();
    }
  });
}

function renderAll() {
  const current = menuData[state.main];
  menuTitle.textContent = current.title;

  mainTabs.forEach(tab => {
    tab.classList.toggle("active", tab.dataset.main === state.main);
  });

  renderSubTabs();
  renderGrid();
  renderPagination();
}

mainTabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    state.main = tab.dataset.main;
    state.sub = "전체";
    state.page = 1;
    renderAll();
  });
});

renderAll();