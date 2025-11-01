import React from 'react';
import Card from '@/components/ui/Card';
import Text from '@/components/ui/Text';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <Card
          title="Backlog"
          titleColor="white"
          titleAlign="center"
          titleHasBottomBorder
          titleBgColor="info"
          color="white"
          titleSize="md"
          paddingSize="md"
          shadow="md"
          radius="lg"
          hasBorder
        >
          <Text size="md" color="white">
            No tasks yet
          </Text>
        </Card>

        <Card
          title="In Progress"
          titleColor="white"
          titleAlign="center"
          titleHasBottomBorder
          titleBgColor="warning"
          color="white"
          paddingSize="md"
          shadow="md"
          radius="lg"
          hasBorder
        >
          <Text size="sm" color="white">
            No tasks yet
          </Text>
        </Card>

        <Card
          title="Review"
          titleColor="white"
          titleAlign="center"
          titleHasBottomBorder
          titleBgColor="success"
          color="white"
          paddingSize="md"
          shadow="md"
          radius="lg"
          hasBorder
        >
          <Text size="sm" color="white">
            No tasks yet
          </Text>
        </Card>

        <Card
          title="Done"
          titleColor="white"
          titleAlign="center"
          titleHasBottomBorder
          titleBgColor="accent"
          color="white"
          paddingSize="md"
          shadow="md"
          radius="lg"
          hasBorder
        >
          <Text size="md" color="white">
            No tasks yet
          </Text>
        </Card>

      </div>
    </div>
  );
};

export default Dashboard;
