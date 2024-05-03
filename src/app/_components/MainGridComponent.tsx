'use client'
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

export default function MainPageGrid(){
  const LAYOUTS = {
    lg: [
      { i: "a", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "b", x: 1, y: 0, w: 1, h: 2, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "c", x: 2, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "d", x: 2, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "e", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "b", x: 1, y: 0, w: 1, h: 2, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "c", x: 0, y: 1, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "d", x: 2, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "e", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
    ],
    sm: [
      { i: "a", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "b", x: 0, y: 1, w: 1, h: 2, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "c", x: 0, y: 2, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "d", x: 2, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
      { i: "e", x: 0, y: 0, w: 1, h: 1, minw: 1, maxw: 1, minh: 1, maxh: 2 },
    ],
  };
  return (
    <div>
      <ResponsiveGridLayout 
        className="layout"
        layouts={LAYOUTS}
        breakpoints={{ lg: 1000, md: 600, sm: 480 }}
        cols={{ lg: 3, md: 2, sm: 1 }}
        isResizable={false}
        isDraggable={true}
      >
      {LAYOUTS.lg.map((el) => (
        <div className="bg-zinc-800 rounded-xl" key={el.i} {...el}>
          <h1>카테고리</h1>            
          <p>
            {el.i}
          </p>
        </div>
      ))}
        <div className="bg-zinc-700 rounded-xl flex items-center" key="f" data-grid={{ x: 6, y: 0, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 2 }}>
          <ul>
            <li className="relative bottom-0 text-6xl overflow-hidden font-thin font-oswald-200 flex justify-center">Comment</li>
          </ul>
        </div>
      </ResponsiveGridLayout>
    </div>
  );
}

/*
      ----------- 배열렌더링

{LAYOUTS.lg.map((el) => (
          <div className="bg-stone-200 rounded-xl" key={el.i} {...el}>
            <h1>카테고리</h1>            
            <p>
              {el.i}
            </p>
          </div>
        ))}


        ------------- 개별렌더링

        <div className="bg-stone-200 rounded-xl" key="f" data-grid={{ x: 6, y: 0, w: 1, h: 1, minW: 1, maxW: 1, minH: 1, maxH: 2 }}>
          <h1>카테고리</h1>            
          <p>asdg</p>
        </div>
*/
