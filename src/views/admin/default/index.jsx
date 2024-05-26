import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Text,
  Link,
  Divider,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React from "react";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} px={{ base: "4", md: "8" }}>
      {/* Page Heading */}
      {/* <Flex alignItems="center" justifyContent="space-between" mb="4">
        <Heading as="h1" size="lg" color="gray.800" fontWeight="bold">
          [เมนู] : 🏠 หน้าหลัก
        </Heading>
      </Flex> */}

      <br />
      
      <Text as="h5" fontSize="2xl" color="blue.500" fontWeight="bold">
        ⚙️ : เครื่องมือทั้งหมดในเว็บไซต์
      </Text>
      <Divider my="4" />
      <SimpleGrid columns={1} spacing="4">
        <Box bg="white" boxShadow="lg" p="6" rounded="md" borderLeft="4px" borderColor="blue.500">
          <Box>
            <Text fontSize="md" color="gray.700">
              1. ระบบบันทึกผลการแข่งขันกีฬา <br />
              2. ระบบบันทึกสรุปผลการแข่งขันตามประเภทกีฬา <br />
              3. ระบบบันทึกผลการแข่งขันกรีฑา <br />
              4. ระบบบันทึกผลคะแนนการประกวด <br />
              5. แก้ไขประเภทกีฬา <br />
              6. พิมพ์รายงานผลการแข่งขัน <br />
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <br />
      <Text as="h5" fontSize="2xl" color="blue.500" fontWeight="bold">
        📖 : คู่มือการใช้งานระบบ
      </Text>
      <Divider my="4" />
      <SimpleGrid columns={1} spacing="4">
        <Box bg="white" boxShadow="lg" p="6" rounded="md" borderLeft="4px" borderColor="blue.500">
          <Box>
            <Text fontSize="md" color="gray.700" fontWeight="bold" textTransform="uppercase">
              <Link href="https://drive.google.com/file/d/1xc6vAypIJv5tYutqnPHh8YColwwStfNe/view?usp=sharing" isExternal>
                👆 คลิกที่นี่เพื่อไปยังคู่มือการใช้งานระบบ <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://youtu.be/0SdwVwu73r0?si=yBnvMvjwIlUPWgD_" isExternal>
                👆 คลิกที่นี่เพื่อไปยังวิดีโอสาธิตการใช้งานระบบ <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Text fontSize="sm" color="red.500">
                ❗คำแนะนำ : การใช้งานระบบบนแล็ปท็อปหรือคอมพิวเตอร์ จะให้การแสดงผลและประสบการณ์การใช้งานที่ดีกว่า
              </Text>
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <br />
      <Text as="h5" fontSize="2xl" color="blue.500" fontWeight="bold">
        🔗 : ไปที่เว็บไซต์
      </Text>
      <Divider my="4" />
      <SimpleGrid columns={1} spacing="4">
        <Box bg="white" boxShadow="lg" p="6" rounded="md" borderLeft="4px" borderColor="blue.500">
          <Box>
            <Text fontSize="md" color="gray.700" fontWeight="bold" textTransform="uppercase">
              <Link href="https://sites.google.com/bn.ac.th/nakagames/home" isExternal>
                🔗 หน้าหลัก <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://sites.google.com/bn.ac.th/nakagames/info" isExternal>
                🔗 ข้อมูลนาคาเกมส์ <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://sites.google.com/bn.ac.th/nakagames/medal-ranking" isExternal>
                🔗 สรุปอันดับเหรียญ <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://sites.google.com/bn.ac.th/nakagames/trophy" isExternal>
                🔗 สรุปถ้วยรางวัล <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://sites.google.com/bn.ac.th/nakagames/Competition-results-by-sport-type" isExternal>
                🔗 ผลการแข่งขันตามประเภทกีฬา <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
              <Link href="https://sites.google.com/bn.ac.th/nakagames/Summary-of-competition-results-by-sport-type" isExternal>
                🔗 สรุปผลการแข่งขันตามประเภทกีฬา <ExternalLinkIcon mx="2px" />
              </Link>
              <br />
              <br />
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
