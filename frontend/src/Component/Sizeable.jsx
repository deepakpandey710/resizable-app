import React from 'react';
import { ResizableBox } from 'react-resizable';
import '../App.css';
import Add from './Add';
import Update from './Update';
import Count from './Count';


export default class ExampleLayout extends React.Component {
  render() {
    return (
      <div className='component'>
        <div className="layoutRoot">
          <ResizableBox
            className="custom-box box"
            width={400}
            height={300}
            minConstraints={[350, 220]}
            handle={(h, ref) => <span className={`custom-handle custom-handle-${h}`} ref={ref} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <Add />
          </ResizableBox>

          <ResizableBox
            className="custom-box box"
            width={700}
            height={300}
            minConstraints={[350, 220]}
            handle={(h, ref) => <span className={`custom-handle custom-handle-${h}`} ref={ref} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <Update />
          </ResizableBox>

          <ResizableBox
            className="custom-box box"
            width={1000}
            height={300}
            minConstraints={[350, 220]}
            handle={(h, ref) => <span className={`custom-handle custom-handle-${h}`} ref={ref} />}
            handleSize={[8, 8]}
            resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            <Count />
          </ResizableBox>
        </div>
      </div>
    );
  }
}
