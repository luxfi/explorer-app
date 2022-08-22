import { FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import React, { useCallback } from 'react';
import type { ControllerRenderProps, Control } from 'react-hook-form';
import { Controller } from 'react-hook-form';

import type { Inputs } from './PublicTagsForm';

const TEXT_INPUT_MAX_LENGTH = 255;

interface Props {
  control: Control<Inputs>;
}

export default function PublicTagFormComment({ control }: Props) {
  const renderComment = useCallback(({ field }: {field: ControllerRenderProps<Inputs, 'comment'>}) => {
    return (
      <FormControl variant="floating" id={ field.name } size="lg">
        <Textarea
          { ...field }
          size="lg"
        />
        <FormLabel>Specify the reason for adding tags and color preference(s).</FormLabel>
      </FormControl>
    );
  }, []);

  return (
    <Controller
      name="comment"
      control={ control }
      render={ renderComment }
      rules={{ maxLength: TEXT_INPUT_MAX_LENGTH }}
    />
  );
}