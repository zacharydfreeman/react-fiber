import {
  FiberNode,
  ReactElement,
  createFiberNode,
  reconcile,
} from '../src/react-fiber';

describe('createFiberTree', () => {
  it('creates a valid fiber tree', () => {
    const rootReactElement: ReactElement = {
      type: 'div',
      props: {
        className: 'container',
        children: [
          {
            type: 'h1',
            props: {
              className: 'title',
              children: ['Hello, world!'],
            },
          },
          {
            type: 'p',
            props: {
              className: 'text',
              children: ['This is a test.'],
            },
          },
        ],
      },
    };
    const rootFiberNode = createFiberNode(rootReactElement, null);
    const tree: FiberNode = reconcile(
      rootFiberNode,
      rootReactElement.props.children
    );

    expect(tree.child?.element?.type).toBe('h1');
    expect(tree.child?.sibling?.element?.type).toBe('p');
  });
});
