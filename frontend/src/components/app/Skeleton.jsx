import { Box, Skeleton, SkeletonText, Flex, SimpleGrid } from '@chakra-ui/react';

export default function SkeletonComponent() {
  // Simulate 4 stat boxes and 2 habit cards as placeholders
  return (
    <Box p={6} minH="100vh">
      {/* Add Habit Button Row */}
      <Flex margin={5} alignItems="center" justifyContent="flex-end">
        <Skeleton height="40px" width="120px" borderRadius="md" />
      </Flex>

      {/* Header */}
      <Skeleton height="32px" width="300px" mb={4} borderRadius="md" />

      {/* Stats Summary */}
      <Flex mb={8} wrap="wrap" gap={6}>
        {[...Array(4)].map((_, idx) => (
          <Box key={idx} p={4} borderRadius="md" shadow="md" minW="120px">
            <Skeleton height="20px" mb={2} width="80px" />
            <Skeleton height="24px" width="40px" />
          </Box>
        ))}
      </Flex>

      {/* Habit Cards */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {[...Array(2)].map((_, idx) => (
          <Box
            key={idx}
            border="1px solid"
            borderColor="gray.200"
            borderRadius="lg"
            p={4}
            margin={1}
            boxShadow="base"
          >
            <Flex justify="space-between" align="center" mb={2}>
              <Skeleton height="24px" width="120px" />
              <Skeleton height="20px" width="60px" borderRadius="full" />
            </Flex>
            <SkeletonText mt="2" noOfLines={2} spacing="2" skeletonHeight="16px" />
            <Skeleton height="16px" width="100px" mt={2} />
            <Skeleton height="16px" width="80px" mt={2} />

            <Flex gap={2} mt={4} flexWrap="wrap">
              {[...Array(4)].map((_, btnIdx) => (
                <Skeleton key={btnIdx} height="32px" width="60px" borderRadius="md" />
              ))}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}