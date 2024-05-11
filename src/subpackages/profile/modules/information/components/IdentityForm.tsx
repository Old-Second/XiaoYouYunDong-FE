import { Text, View } from '@tarojs/components';
import { useEffect, useState } from 'react';
import { AtForm, AtImagePicker, AtInput } from 'taro-ui';

import { PersonalFormData } from './PersonalForm';
import { SchoolFormData } from './SchoolForm';

export interface IdentityFormData {
  name: string;
  id: string;
  idFront: string;
  idBack: string;
}

interface IdentityFormProps {
  OnSubmit: (
    name: string,
    value: PersonalFormData | IdentityFormData | SchoolFormData[]
  ) => void;
}

const IdentityForm: React.FC<IdentityFormProps> = ({ OnSubmit }) => {
  const [identityFormData, setIdentityFormData] = useState<IdentityFormData>({
    name: '',
    id: '',
    idFront: '',
    idBack: '',
  });

  const handleInputChange = (name: string, value: string | number) => {
    // console.log(value);
    setIdentityFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    OnSubmit('identity', identityFormData);
  }, [OnSubmit, identityFormData]);

  return (
    <View className="mx-auto my-5 flex w-5/6 flex-col rounded-xl bg-white">
      <Text className="mx-5 mt-5">身份认证</Text>
      <AtForm className="mx-auto my-5 w-5/6">
        <AtInput
          name="name"
          title="真实姓名"
          type="text"
          value={identityFormData.name}
          onChange={(v) => {
            handleInputChange('name', v);
          }}
        />
        <AtInput
          name="id"
          title="身份证"
          type="idcard"
          value={identityFormData.id}
          onChange={(v) => {
            handleInputChange('id', v);
          }}
        />
        <View className="flex items-center justify-center pl-[32rpx]">
          <Text className="w-1/2">身份证正面</Text>
          <AtImagePicker
            count={1}
            multiple={false}
            files={[{ url: identityFormData.idFront }]}
            onChange={(e) => {
              handleInputChange('idFront', e[1].url);
            }}
          />
        </View>
        <View className="flex items-center justify-center pl-[32rpx]">
          <Text className="w-1/2">身份证反面</Text>
          <AtImagePicker
            count={1}
            multiple={false}
            files={[{ url: identityFormData.idBack }]}
            onChange={(e) => {
              handleInputChange('idBack', e[1].url);
            }}
          />
        </View>
      </AtForm>
    </View>
  );
};
export default IdentityForm;
