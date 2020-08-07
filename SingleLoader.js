import React from "react";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";


 
const SingleLoader = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center" marginTop={20} marginLeft="1%">
          <SkeletonPlaceholder.Item width={160} height={110} borderRadius={10}  />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width="150%" height={20} borderRadius={4} />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width="130%"
              height={20}
              borderRadius={4}
            />
            <SkeletonPlaceholder.Item
              marginTop={10}
              width={120}
              height={20}
              borderRadius={4}
            />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row" marginLeft={5} >
            <SkeletonPlaceholder.Item marginTop={10} width={35} height={35} borderRadius={50}/>
            <SkeletonPlaceholder.Item marginTop={10} width={35} height={35} borderRadius={50} marginLeft={5}/>
            <SkeletonPlaceholder.Item marginTop={10} width={35} height={35} borderRadius={50} marginLeft={5}/>
            <SkeletonPlaceholder.Item marginTop={10} width={35} height={35} borderRadius={50} marginLeft={5}/>
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item flexDirection="row" marginLeft={8} marginRight={50} >
            <SkeletonPlaceholder.Item marginTop={10} width={355} height={50} borderRadius={5}/>  
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>

</SkeletonPlaceholder>

  );
};

export default SingleLoader;