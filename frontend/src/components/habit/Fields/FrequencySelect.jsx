import { NativeSelect} from '@chakra-ui/react'

export default function StatusSelect() {
    const options = [1, 2, 3, 4, 5, 6, 7];
    return (
        <NativeSelect.Root>
            <NativeSelect.Field placeholder='select option'>
                {options.map((value, index) => <option value={index + 1}>value</option>)}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
        </NativeSelect.Root>
    )
}

