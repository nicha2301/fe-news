import { useEffect, useState } from "react";
import { Alert } from "~/components/ui/alert";
import { RSS } from "~/services/api/model/RSSModel";

export const AlertComp = (props: { item: RSS }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;
  
  return (
    <Alert className="fixed bottom-5 right-5 max-w-[400px] p-1 animate-slide-in-right z-10 overflow-hidden">
      <div className="flex items-center">
        <img src="https://media.istockphoto.com/id/1145179413/vi/vec-to/ruy-b%C4%83ng-m%C3%A0u-%C4%91%E1%BB%8F-v%E1%BB%9Bi-d%C3%B2ng-ch%E1%BB%AF-m%E1%BB%9Bi-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=_lYxprRlYT-ZWtHoSBVLp9SLlmGKEhbyQpg6eE1T7ls=" className="h-[70px] w-[70px] mr-3" />
        <div className="overflow-hidden">
          <h3 className="text-sm font-medium text-gray-900">Tin mới!</h3>
          <a className="mt-1 text-sm text-gray-500 hover:text-primaryColor cursor-pointer" href={`/detail/${props.item.link?.split('/').pop()}`} title={props.item.title}>
            {props.item.title}
          </a>
        </div>
      </div>
    </Alert>
  )
}