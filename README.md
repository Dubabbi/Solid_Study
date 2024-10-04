# Solid.js

# 🔭 Solid.js란? 고성능의 선언형 UI 라이브러리

---

> React만큼 편리하면서도 **더 빠른** 프레임워크의 등장
> 

<aside>
☁

**Solid.js**는 고성능 리액티브(반응형) UI 라이브러리로, JavaScript 프레임워크인 React와 비슷한 사용성을 가지면서도 성능 면에서 상당한 이점을 제공합니다. Solid.js는 특히 빠른 성능과 가벼운 컴포넌트 렌더링을 지향하고 있어, 새로운 차세대 프레임워크로 주목받고 있습니다. 

키워드: **`성능 최적화`** 

</aside>

프론트엔드 개발 분야에서 **성능 최적화**는 늘 중요한 과제입니다. Solid.js는 React와 유사한 사용성을 제공하면서도 높은 성능을 자랑하는 신흥 프레임워크로, 특히 컴파일 기반과 실시간 DOM 조작 방식을 통해 주목받고 있습니다. 이번 아티클에서는 **Solid.js의 특징**과 **활용 가능성**에 대해 깊이 탐구해 보겠습니다.

https://github.com/solidjs/solid

# 🔭 Solid.js vs React

---

> 공통점
> 

| 비교 항목 | Solid.js | React |
| --- | --- | --- |
| JSX 지원 | JSX를 지원하여 컴포넌트 작성 가능 | JSX를 지원하여 컴포넌트 작성 가능 |
| 컴포넌트 기반 구조 | 컴포넌트를 통해 UI를 구성 | 컴포넌트를 통해 UI를 구성 |
| 선언형 프로그래밍 | 선언형 접근 방식으로 상태와 UI를 동기화 | 선언형 접근 방식으로 상태와 UI를 동기화 |

<aside>
☁

Solid.js와 React는 둘 다 **JSX**를 지원하며, 컴포넌트 기반의 **선언형** 프로그래밍을 사용합니다. 

</aside>

> 차이점
> 

| 비교 항목 | Solid.js | React |
| --- | --- | --- |
| 상태 관리 | 반응형 시스템으로 자동 상태 관리 | `useState`, `useEffect` 등을 사용한 명시적 상태 관리 |
| 가상 DOM 사용 여부 | 가상 DOM 없이 실시간 DOM 갱신 | 가상 DOM을 사용하여 변경 사항 예측 및 반영 |
| 번들 크기 | 매우 가벼운 크기(약 6KB) | 기본적으로 더 큰 번들 크기 (약 40KB 이상) |
| 성능 최적화 | 컴파일러 최적화로 더 높은 성능 제공 | 가상 DOM 덕분에 충분히 빠르지만 Solid.js보다 느릴 수 있음 |
| 커뮤니티 지원 | 비교적 작은 커뮤니티와 자료 | 널리 사용되는 프레임워크로 커뮤니티와 자료가 풍부함 |

<aside>
☁

Solid.js는 가상 DOM을 사용하지 않고 실시간으로 DOM을 갱신하며, 더 가볍고 빠른 성능을 제공합니다. 상태 관리는 반응형 시스템을 통해 자동으로 이루어져 코드가 간결해집니다. 반면 React는 가상 DOM을 사용해 변경 사항을 관리하며, 명시적인 상태 관리 훅을 사용합니다. Solid.js는 상대적으로 작은 커뮤니티를 가지고 있는 반면, React는 널리 사용되며 다양한 자료와 커뮤니티 지원을 받을 수 있습니다. 

</aside>

**리스트 항목의 값을 일괄적으로 증가시키는 기능**을 수행하는 코드

버튼을 클릭하면 10,000개의 숫자 리스트가 각각 1씩 증가하며, 업데이트된 값이 화면에 표시됩니다.

> **React 코드**
> 
- `useState`를 사용하여 `items` 상태와 `updated` 상태를 정의합니다.
- `incrementAll` 함수가 호출되면 모든 항목을 `items` 배열에서 `map`으로 1씩 증가시키고, 이를 다시 상태로 설정합니다.
- `ItemList`와 `Item` 컴포넌트는 각각 `memo`로 최적화하여 동일한 항목이 변경되지 않을 경우 재렌더링을 방지합니다.
- `Item` 컴포넌트는 `useEffect`를 통해 `value`가 바뀔 때마다 콘솔에 로그를 남깁니다.

```jsx
import React, { useState, useEffect, memo } from 'react';

function App() {
  const [items, setItems] = useState(Array.from({ length: 10000 }, (_, i) => i));
  const [updated, setUpdated] = useState(0);

  const incrementAll = () => {
    setItems((prevItems) => prevItems.map((item) => item + 1));
    setUpdated((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={incrementAll}>Increment All</button>
      <ItemList items={items} />
    </div>
  );
}

const ItemList = memo(({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} value={item} />
      ))}
    </div>
  );
});

const Item = memo(({ value }) => {
  useEffect(() => {
    console.log(`Rendering item with value: ${value}`);
  }, [value]);

  return <p>Item: {value}</p>;
});

export default App;

```

React에서는 `memo`와 `useEffect`를 통해 최적화를 수동으로 관리해야 하며, `memo`를 사용해 성능을 개선하고, 상태 변경을 추적하기 위해 `useEffect`를 추가합니다. 이로 인해 코드가 길어지고 복잡해집니다.

> **Solid.js 코드**
> 
- `createSignal`로 `items` 상태를 생성하고, `incrementAll` 함수로 모든 항목을 1씩 증가시킵니다.
- 상태가 변경될 때마다 `For` 반복문이 자동으로 갱신하여 필요한 DOM만 업데이트합니다.
- `Item` 컴포넌트는 `console.log`로 각 항목의 값을 출력합니다.

```jsx
import { createSignal, For } from 'solid-js';

function App() {
  const [items, setItems] = createSignal(Array.from({ length: 10000 }, (_, i) => i));

  const incrementAll = () => {
    setItems((prev) => prev.map((item) => item + 1));
  };

  return (
    <>
      <button onClick={incrementAll}>Increment All</button>
      <For each={items()}>{(item) => <Item value={item} />}</For>
    </>
  );
}

function Item({ value }) {
  console.log(`Rendering item with value: ${value}`);
  return <p>Item: {value}</p>;
}

export default App;

```

Solid.js에서는 `createSignal`과 `For` 반복문으로 간결하게 상태를 관리하고 실시간으로 업데이트할 수 있습니다. `memo`와 같은 최적화가 필요하지 않으며, 상태 변화에 따라 필요한 부분만 자동으로 갱신되므로 코드가 훨씬 짧아집니다.

Solid.js는 반응형 상태 관리 시스템과 실시간 DOM 업데이트를 통해 불필요한 오버헤드를 줄입니다. 예를 들어, Solid.js는 React처럼 가상 DOM을 사용하지 않으며, 상태 변화에 따라 필요한 부분만 DOM에 직접 갱신하여 효율성을 극대화합니다. 

두 코드는 같은 기능을 수행하지만, Solid.js는 React의 최적화 메커니즘을 코드로 구현할 필요 없이 실시간 업데이트와 최적화를 자동으로 처리해 더 간결하게 작성됩니다. `memo`와 `useEffect`가 Solid.js에는 필요 없으므로 더 효율적이고 짧게 구현됩니다.

# 🔎 Solid.js의 매력 속으로..

---

1. **컴파일 기반 성능 최적화**
    - Solid.js는 코드를 작성할 때 컴파일러가 **`"내가 알아서 최적화해줄게!"`**라며 속도를 끌어올립니다. DOM 조작이 줄어드니 더 빨라요.
2. **반응형 상태 관리**
    - 변화가 생기면 알아서 UI를 척척 업데이트해주는 Solid.js는, 마치 자가 업데이트가 되는 만능 개발 도구처럼 느껴집니다.
3. **가상 DOM이 필요 없어!**
    - "가상 DOM? 그게 뭐지?"라며 실시간으로 DOM을 업데이트합니다. 불필요한 계산 없이 바로바로 갱신되니 얼마나 깔끔한지요!
4. **친숙한 JSX**
    - JSX를 지원해서 React 개발자도 금방 친해질 수 있습니. 마치 익숙한 친구와 새롭게 만나는 것 같은 느낌입니다.
5. **컴포넌트 기반**
    - React처럼 재사용 가능한 컴포넌트를 만들어 더욱 큰 UI를 쉽게 구축할 수 있습니다. 작고 귀여운 부품들이 모여 대형 프로젝트로 탄생합니다.
6. **작고 가벼운 무게**
    - Solid.js는 약 6KB에 불과한 깔끔한 몸집을 자랑합니다. 작은 번들 크기로 빠른 속도를 구현하니 가히 초고속 프레임워크라 불릴 만합니다!

# 🔭 Solid.js의 장단점

---

> 장점
> 
1. 사용하기 쉽고 가볍습니다. 
    
    ⚒️ 마치 입문자도 프로처럼 쓸 수 있는 만능 도구 !⚒️
    
2. 빠른 성능 덕분에 대규모 애플리케이션에 딱입니다.

> 단점
> 
1. 커뮤니티가 작아서 자료 찾기가 어려울 수 있어요..
2. 새로운 방식이라 적응 시간이 필요할 수 있습니다.
    
    쉽게 말해 ‘진입장벽’이 있지만, 그래도 리액트 처음 도전했을 때랑 비교해보면… 처음 시작하는 것보다 훨씬 진입장벽이 낮다고 생각합니다.
    
    → Solid.js는 **고성능 프로젝트**에 도전하고 싶은 개발자들에게 딱 맞는 선택지입니다!
    

# 🔭 Solid.js 설치 및 실행 방법

---

> Solid.js를 설치하려면 다음 단계를 따르세요:
> 
1. **Node.js 설치**: Node.js가 설치되어 있지 않다면 [Node.js](https://nodejs.org/)를 먼저 설치합니다.
2. **새 프로젝트 생성**
    
    ```bash
    // 새 프로젝트 생성
    npx degit solidjs/templates/js my-solid-app
    cd my-solid-app
    
    // 패키지 설치
    npm install
    
    // 개발 서버 시작
    npm run dev
    ```
    

# 📝 마무리

---

<aside>
☁

Solid.js는 성능 면에서 확실히 매력적입니다. 특히 대규모 애플리케이션이나 실시간 업데이트가 중요한 프로젝트에서 그 진가를 발휘할 것으로 보입니다. 물론 생태계가 작아 학습 자료나 라이브러리 지원이 제한적일 수 있지만, 성장 가능성은 충분해 보입니다. 특히 Solid.js는 최신 프로젝트에서의 성능 요구사항을 만족시키기에 충분한 잠재력을 가지고 있어, 고성능 애플리케이션에 매우 적합합니다. 프론트엔드 트렌드를 선도하는 개발자들에게 특히 흥미로운 선택지가 될 수 있습니다. 앞으로 Solid.js가 어떻게 발전할지 기대되며, 성능 중심의 애플리케이션을 고민하는 개발자라면 한 번쯤 Solid.js를 살펴보길 추천합니다.

</aside>
