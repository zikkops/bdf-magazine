import { Fragment } from "react";
import { PLACEMENTS } from "@/lib/placements";

type Item = [key: string, name: string, price: string, description: string];

const GROUPS: { title: string; items: Item[] }[] = [
  {
    title: "Standard placements",
    items: [
      ["fakecover", "Fake cover", "$7,500", "A full branded wrap around the real cover, front and back."],
      ["cover", "Cover", "$6,000", "One brand on the cover visual under the BDF masthead, plus an inside feature page."],
      ["gatefold", "Gatefold", "$5,500", "Three panels folding out from the cover."],
      ["fourpages", "4 pages", "$5,000", "Two consecutive spreads for a brand story, editorial style."],
      ["backcover", "Back cover", "$4,500", "The whole back page, face-up in every bag."],
      ["spread", "Spread", "$3,800", "Two facing pages, one image across the fold."],
      ["ifc", "Inside front cover", "$3,500", "The page facing the editor's letter."],
      ["qa", "Q&A interview", "$3,000", "Two pages: portrait and interview, written by us, marked as a partnership."],
      ["ibc", "Inside back cover", "$3,000", "The page facing the last editorial page."],
      ["fullpage", "Full page", "$2,200", "One full page facing editorial. The standard unit."],
      ["halfpage", "Half page", "$1,300", "Lower half of an editorial page. Vertical on request."],
      ["quarterpage", "Quarter page", "$750", "A quarter of an editorial page, bottom corner."],
      ["directory", "Directory block", "$350", "One block on the directory grid: logo, one line, contact."],
    ],
  },
  {
    title: "Sponsored editorial",
    items: [
      ["section", "Sponsored section", "$4,000", "The brand's name in the section header on every page of the section."],
      ["shopthelook", "Shop the look", "$4,200", "Styled brand photo on the left, products numbered with prices on the right."],
      ["destination", "Destination guide", "$4,200", "A city or resort guide across a spread, the partner's offer at the end."],
      ["pairing", "Pairing feature", "$2,800", "A drink and food pairing page."],
      ["editorletter", "Editor's letter sponsor", "$1,500", "Logo and one line beside the opening editorial."],
    ],
  },
  {
    title: "Add-ons",
    items: [
      ["scentstrip", "Scent strip", "$3,000 + production", "Peel-to-smell fragrance strip bound into the brand's page."],
      ["sachet", "Sample sachet", "$2,500 + production", "Skincare or cosmetics sachet bound into the brand's page."],
      ["insert", "Loose insert", "$1,800", "A separate card or flyer inside the magazine, up to A5, max 10 g."],
      ["coupon", "Coupon page", "$1,600", "Cut-out or scannable voucher, redeemed and counted in store."],
      ["qr", "QR unlocked content", "$600", "A QR on the brand's page opening video, game or app content."],
      ["banner", "App and website banner", "$900", "A banner on the BDF website and app for one quarter."],
      ["quiz", "Sponsored quiz or giveaway", "$1,800", "A quiz or draw page with the brand's prize, plus an Instagram story."],
      ["social", "Instagram post and story", "Included", "With every placement above a half page."],
    ],
  },
];

export default function Placements() {
  return (
    <div className="pl">
      {GROUPS.map((group) => (
        <Fragment key={group.title}>
          <h4>{group.title}</h4>
          {group.items.map(([key, name, price, description]) => (
            <div className="item" key={key}>
              {/* Diagram markup is generated locally from static data in lib/placements.ts */}
              <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: PLACEMENTS[key]() }} />
              <h3>
                {name}
                <span>{price}</span>
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
