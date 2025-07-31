import * as React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea
import { Card } from '@/components/ui/card'; // Import Card

type ProjectContentBlock =
  | { type: 'paragraph'; content: string; className?: string }
  | { type: 'heading'; level: 1 | 2 | 3 | 4 | 5 | 6; content: string; className?: string }
  | { type: 'list'; items: string[]; className?: string } // items can contain HTML strings
  | { type: 'card'; content: ProjectContentBlock[]; className?: string }; // New 'card' type for nested content

interface ProjectDescriptionRendererProps {
  description: string | string[] | ProjectContentBlock[];
}

export function ProjectDescriptionRenderer({ description }: ProjectDescriptionRendererProps): React.JSX.Element {
  let contentBlocks: ProjectContentBlock[] = [];

  if (Array.isArray(description)) {
    if (description.length > 0 && typeof description[0] === 'string') {
      // It's a string array (old format), convert to paragraphs
      contentBlocks = (description as string[]).map(content => ({ type: 'paragraph', content }));
    } else {
      // It's already ProjectContentBlock[]
      contentBlocks = description as ProjectContentBlock[];
    }
  } else if (typeof description === 'string') {
    // It's a single string, assume it's a paragraph (could contain HTML)
    contentBlocks = [{ type: 'paragraph', content: description }];
  }

  const renderBlock = (block: ProjectContentBlock, index: number): React.ReactNode => {
    switch (block.type) {
      case 'paragraph':
        return (
          <p key={index} className={cn("text-base leading-relaxed text-muted-foreground", block.className)} dangerouslySetInnerHTML={{ __html: block.content }} />
        );
      case 'heading':
        const HeadingTag = `h${block.level}`;
        return React.createElement(
          HeadingTag,
          {
            key: index,
            className: cn(
              "font-semibold text-foreground",
              block.level === 1 && "text-4xl",
              block.level === 2 && "text-3xl",
              block.level === 3 && "text-xl mb-2",
              block.level === 4 && "text-lg mb-1",
              block.level === 5 && "text-base",
              block.level === 6 && "text-sm",
              block.className
            ),
            dangerouslySetInnerHTML: { __html: block.content }
          }
        );
      case 'list':
        return (
          <ul key={index} className={cn("list-disc ml-4 text-base leading-relaxed text-muted-foreground", block.className)}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        );
      case 'card':
        return (
          <Card key={index} className={cn("p-4", block.className)}>
            <div className="space-y-2">
              {block.content.map((nestedBlock, nestedIndex) => renderBlock(nestedBlock, nestedIndex))}
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className="relative h-[400px] overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <ScrollArea className="h-full pr-4">
        <div className="space-y-4 pt-4 pb-4">
          {contentBlocks.map((block, index) => renderBlock(block, index))}
        </div>
      </ScrollArea>
    </div>
  );
}