import { CarouselComponent } from "@/components/carousel";
import { PUBLIC_PATH } from "@/constants";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardComponent from "@/components/card";
import ListItem from "@/components/listItem";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="grid grid-flow-row-dense grid-cols-3 sx:grid-cols-1 w-full gap-5">
        <div className="col-span-2">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row justify-between items-center">
              <div className="border-l-4 border-button px-5 text-white font-bold text-lg">
                TRENDING NOW
              </div>

              <Link
                className="transition delay-75 hover:-translate-x-2"
                href={PUBLIC_PATH.ANIME}>
                <span>
                  Vew all <ArrowForwardIcon />
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-10">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            <div className="flex flex-row justify-between items-center">
              <div className="border-l-4 border-button px-5 text-white font-bold text-lg">
                POPULAR SHOWS
              </div>

              <Link
                className="transition delay-75 hover:-translate-x-2"
                href={PUBLIC_PATH.ANIME}>
                <span>
                  Vew all <ArrowForwardIcon />
                </span>
              </Link>
            </div>
            <div className="flex flex-wrap gap-10">
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pl-5">
          <div className="flex flex-row justify-between items-center">
            <div className="border-l-4 border-button px-5 text-white font-bold text-lg">
              TOP RANKING
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
          </div>
        </div>
      </div>
    </>
  );
}
