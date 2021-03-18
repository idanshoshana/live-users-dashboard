import { render, screen } from '@testing-library/react';
import Post from './post';

describe('<Post />', () => {
  it('renders post title', () => {
    const title = 'New Post';
    const content = 'New Content';

    render(<Post title={title} content={content} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders post content', () => {
    const title = 'New Post';
    const content = 'New Content';

    render(<Post title={title} content={content} />);
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
