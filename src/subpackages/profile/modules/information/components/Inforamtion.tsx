import { View } from '@tarojs/components';
import { useState } from 'react';
import { AtButton } from 'taro-ui';

import IdentityForm, { IdentityFormData } from './IdentityForm';
import PersonalForm, { PersonalFormData } from './PersonalForm';
import SchoolForm, { SchoolFormData } from './SchoolForm';

export interface inforamtionFormData {
  personal: PersonalFormData;
  identity: IdentityFormData;
  school: SchoolFormData;
}

const Inforamtion: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [inforamtionForm, setInforamtionForm] = useState<inforamtionFormData>({
    personal: {
      avatar: '',
      nickname: '',
      gender: '',
      dateOfBirth: '',
      phone: '',
      height: '',
      weight: '',
    },
    identity: {
      name: '',
      id: '',
      idFront: '',
      idBack: '',
    },
    school: {
      degree: '',
      college: '',
      school: '',
      startYear: '',
      endYear: '',
    },
  });

  const OnSubmit = (
    name: string,
    value: PersonalFormData | IdentityFormData | SchoolFormData[]
  ) => {
    setInforamtionForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSave = () => {
    // console.log(inforamtionForm);
  };

  return (
    <View className="flex min-h-screen flex-col bg-[#E7FFF7]">
      <PersonalForm OnSubmit={OnSubmit} />
      <IdentityForm OnSubmit={OnSubmit} />
      <SchoolForm OnSubmit={OnSubmit} />
      <AtButton full onClick={onSave}>
        保存
      </AtButton>
    </View>
  );
};

export default Inforamtion;
