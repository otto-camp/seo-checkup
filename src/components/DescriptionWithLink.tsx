import React from "react";

export default function DescriptionWithLink({ text }: { text: string }) {
  // const sentences = text.split(". ");

  // return (
  //   <div>
  //     {sentences.map((sentence, index) => {
  //       if (sentence.startsWith("[Learn")) {
  //         const linkStartIdx = sentence.indexOf("(https://");
  //         const linkEndIdx = sentence.indexOf(")");
  //         const linkText = sentence.substring(1, linkStartIdx - 1);
  //         const linkUrl = sentence.substring(linkStartIdx + 1, linkEndIdx);

  //         return (
  //           <p key={index}>
  //             <a href={linkUrl} target="_blank" className="text-blue-500">
  //               {linkText}
  //             </a>
  //             {sentence.substring(linkEndIdx + 1)}
  //           </p>
  //         );
  //       }

  //       return <p key={index}>{sentence}</p>;
  //     })}
  //   </div>
  // );
  const words = text.split(" ");

  type LinkIndex = {
    start: number;
    end: number;
  };

  const isValidLinkIndex = (index: number) => {
    return linkIndexes.some((linkIndex) => {
      return linkIndex.start === index || linkIndex.end === index;
    });
  };
  const linkIndexes: LinkIndex[] = words.reduce(
    (acc: LinkIndex[], word: string, index: number) => {
      if (word.startsWith("[")) {
        acc.push({ start: index, end: -1 });
      } else if (acc.length > 0 && word.endsWith(").")) {
        console.log(acc, word);

        // acc[acc.length - 1].end = index;
      }
      return acc;
    },
    []
  );

  const getLinkText = (word: string, index: number) => {
    const matchingLink = linkIndexes.find(
      (link) => link.start === index || link.end === index
    );

    if (!matchingLink) {
      throw new Error("No link found at index " + index);
    }

    const { start, end } = matchingLink;
    if (start === index) {
      return word.slice(1);
    } else if (end === index && end !== -1) {
      return word.slice(0, -1);
    }

    throw new Error("Invalid link index at " + index);
  };

  const getLinkUrl = (index: number) => {
    const matchingLink = linkIndexes.find(
      (link) => link.start === index || link.end === index
    );

    if (!matchingLink) {
      throw new Error("No link found at index " + index);
    }

    const { start, end } = matchingLink;

    if (start === index && end < words.length) {
      return words.slice(start + 1, end).join(" ");
    } else {
      throw new Error("Invalid link index at " + index);
    }
  };

  const renderLinks = (words: string[]) => {
    return words.map((word, index) => {
      if (isValidLinkIndex(index)) {
        return (
          <a
            key={index}
            href={getLinkUrl(index)}
            className="text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {getLinkText(word, index)}
          </a>
        );
      } else {
        return <React.Fragment key={index}>{word} </React.Fragment>;
      }
    });
  };

  return (
    <div>
      <p>
        {renderLinks(words).map((element, index) => (
          <React.Fragment key={index}>{element}</React.Fragment>
        ))}
      </p>
    </div>
  );
}
