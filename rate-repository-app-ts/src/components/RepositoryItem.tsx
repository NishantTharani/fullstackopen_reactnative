import { Image, View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { Repository } from '../types';

const styles = StyleSheet.create({
  repositoryItemContainer: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#fff',
  },
  topRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  nameSubContainer: {
    display: 'flex',
    marginLeft: 20,
    alignItems: 'flex-start',
  },
  metricsRowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  metricContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    // borderRadius: 20,
  },
});

interface RepositoryItemProps {
  repository: Repository;
}

const roundCounts = (count: number) => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count;
};

const RepositoryItem = ({ repository }: RepositoryItemProps) => {
  return (
    <View testID="repositoryItem">
      <View style={styles.repositoryItemContainer}>
        <RepositoryHeaderRow
          avatarUrl={repository.ownerAvatarUrl}
          fullName={repository.fullName}
          description={repository.description}
          language={repository.language}
        />
        <View style={styles.metricsRowContainer}>
          <RepositoryMetricItem
            label="Stars"
            value={repository.stargazersCount}
          />
          <RepositoryMetricItem label="Forks" value={repository.forksCount} />
          <RepositoryMetricItem
            label="Reviews"
            value={repository.reviewCount}
          />
          <RepositoryMetricItem
            label="Rating"
            value={repository.ratingAverage}
          />
        </View>
      </View>
    </View>
  );
};

interface RepositoryHeaderRowProps {
  avatarUrl: string;
  fullName: string;
  description: string;
  language: string;
}

const RepositoryHeaderRow = ({
  avatarUrl,
  fullName,
  description,
  language,
}: RepositoryHeaderRowProps) => {
  return (
    <View style={styles.topRowContainer}>
      <Image style={styles.avatar} source={{ uri: avatarUrl }} />
      <View style={styles.nameSubContainer}>
        <Text fontSize="subheading" fontWeight="bold">
          {fullName}
        </Text>
        <Text color="textSecondary" style={{ paddingVertical: 5 }}>
          {description}
        </Text>
        <Text
          bgColor="blue"
          color="textLight"
          style={{ padding: 3, marginVertical: 5 }}
        >
          {language}
        </Text>
      </View>
    </View>
  );
};

interface RepositoryMetricItemProps {
  label: string;
  value: number;
}

const RepositoryMetricItem = ({ label, value }: RepositoryMetricItemProps) => {
  return (
    <View style={styles.metricContainer}>
      <Text fontWeight="bold">{roundCounts(value)}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default RepositoryItem;
